import { useCallback } from 'react';
import { FlatList, ListRenderItem, RefreshControl } from 'react-native';

import { AppButton } from 'components';
import { BottomSheet } from 'components/BottomSheet';
import { LOCALES } from 'constants/locales';
import { observer } from 'mobx-react';
import { ChatMessage } from 'modules/Chat/models/chatMessage';

import { Message } from './components/MessageContent';
import { MessageSheet } from './components/MessageSheet';
import {
  Container,
  ContainerText,
  NotConnectedContainer,
  ScrollDisabledContainer,
  Separator,
} from './styled';
import { useChatController } from './useChatController';

export const ChatScreen = observer(() => {
  const {
    isLoading,
    handleLogout,
    messages,
    selectedMessage,
    onMessagePress,
    ref,
    onBottomSheetClose,
    reconnect,
    isConnected,
    flatListRef,
    onEndReached,
    onScroll,
    isAtBottom,
  } = useChatController();

  const renderItem: ListRenderItem<ChatMessage> = useCallback(
    ({ item }) => <Message item={item} onMessagePress={onMessagePress} />,
    [onMessagePress],
  );

  const keyExtractor = (item: ChatMessage) => `${item.id}`;

  return (
    <Container>
      <AppButton title={LOCALES.Logout} onPress={handleLogout} />
      {!isConnected && (
        <NotConnectedContainer>
          <ContainerText>{LOCALES.ChatConnectionError}</ContainerText>
        </NotConnectedContainer>
      )}
      {!isAtBottom && (
        <ScrollDisabledContainer>
          <ContainerText>{LOCALES.ChatPaused}</ContainerText>
        </ScrollDisabledContainer>
      )}
      <FlatList<ChatMessage>
        ref={flatListRef}
        keyExtractor={keyExtractor}
        data={messages}
        onScrollEndDrag={onScroll}
        onEndReached={onEndReached}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={reconnect} />
        }
        ItemSeparatorComponent={() => <Separator />}
      />
      <BottomSheet ref={ref} onDismiss={onBottomSheetClose}>
        <MessageSheet selectedMessage={selectedMessage} />
      </BottomSheet>
    </Container>
  );
});
