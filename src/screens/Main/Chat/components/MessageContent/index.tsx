import { FC } from 'react';
import { ViewProps } from 'react-native';

import { ChatMessage } from 'modules/Chat/models/chatMessage';

import { Author, MessageContainer } from './styled';
import { useMessageContentController } from './useMessageContentController';

type TMessageProps = {
  item: ChatMessage;
  onMessagePress: (item: ChatMessage) => void;
} & Pick<ViewProps, 'onLayout'>;

const MessageContent = ({ message }: { message: ChatMessage }) => {
  const { formatChatMessage } = useMessageContentController();
  return formatChatMessage(message);
};

export const Message: FC<TMessageProps> = ({
  item,
  onMessagePress,
  onLayout,
}) => {
  return (
    <MessageContainer
      onLayout={onLayout}
      onPress={() => onMessagePress(item)}
      isDeleted={item.isDeleted}
    >
      <Author color={item.color}>{item.author}</Author>
      <MessageContent message={item} />
    </MessageContainer>
  );
};
