import { useCallback, useEffect, useRef, useState } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import { useAppNavigation } from 'hooks/useAppNavigation';
import { useBottomSheetWrapper } from 'hooks/useBottomSheetWrapper';
import { useRootStore } from 'hooks/useRootStore';
import { ChatMessage } from 'modules/Chat/models/chatMessage';
import { EAuthRoutes } from 'navigation/Auth/routes';
import { ERootRoutes } from 'navigation/Root/routes';

import { TSelectedMessage } from './types';

const BOTTOMSCROLL_THRESHOLD = 16;

export const useChatController = () => {
  const { authStore, chatStore, userStore } = useRootStore();
  const navigation = useAppNavigation();
  const { ref, open } = useBottomSheetWrapper();
  const flatListRef = useRef<FlatList<ChatMessage>>(null);

  const [isAtBottom, setIsAtBottom] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<
    TSelectedMessage | undefined
  >();

  useEffect(() => {
    chatStore.connect();
  }, []);

  useEffect(() => {
    if (isAtBottom) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }, [chatStore.messages, isAtBottom]);

  const handleLogout = async () => {
    const isLoggedOut = await authStore.logout();
    chatStore.clearMessages();

    if (isLoggedOut) {
      navigation.replace(ERootRoutes.Auth, {
        screen: EAuthRoutes.Entry,
      });
    }
  };

  const onMessagePress = useCallback(async (item: ChatMessage) => {
    if (!item.authorId) {
      return;
    }

    open();
    const user = await userStore.getUserById(item.authorId);

    if (!user) {
      onBottomSheetClose();
      return;
    }

    setSelectedMessage({
      userData: user,
      messageData: item,
    });
  }, []);

  const onBottomSheetClose = () => {
    setSelectedMessage(undefined);
  };

  const onEndReached = () => {
    setIsAtBottom(true);
  };

  const onScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = nativeEvent;

    if (
      !(
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - BOTTOMSCROLL_THRESHOLD
      ) &&
      isAtBottom
    ) {
      setIsAtBottom(false);
    }
  };

  return {
    isLoading: chatStore.loadingModel.isLoading,
    handleLogout,
    messages: chatStore.messages.slice(),
    selectedMessage,
    ref,
    onMessagePress,
    onBottomSheetClose,
    reconnect: chatStore.connect,
    isConnected: chatStore.ws.isConnected,
    flatListRef,
    onEndReached,
    onScroll,
    isAtBottom,
  };
};
