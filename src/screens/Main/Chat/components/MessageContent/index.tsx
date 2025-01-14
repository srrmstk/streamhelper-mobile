import { FC, memo } from 'react';

import { ChatMessage } from 'modules/Chat/models/chatMessage';

import { Author, MessageContainer } from './styled';
import { useMessageContentController } from './useMessageContentController';

type TMessageProps = {
  item: ChatMessage;
  onMessagePress: (item: ChatMessage) => void;
};

const MessageContent = ({ message }: { message: ChatMessage }) => {
  const { formatChatMessage } = useMessageContentController();
  return formatChatMessage(message);
};

export const Message: FC<TMessageProps> = memo(
  ({ item, onMessagePress }) => {
    return (
      <MessageContainer
        onPress={() => onMessagePress(item)}
        isDeleted={item.isDeleted}
      >
        <Author color={item.color}>{item.author}</Author>
        <MessageContent message={item} />
      </MessageContainer>
    );
  },
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id,
);
