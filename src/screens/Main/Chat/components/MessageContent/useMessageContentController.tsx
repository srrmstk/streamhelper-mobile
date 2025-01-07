import { AppText } from 'components';
import { useRootStore } from 'hooks/useRootStore';
import { ChatMessage } from 'modules/Chat/models/chatMessage';

import { Message, SevenTvEmoji, TwitchEmoji } from './styled';

export const useMessageContentController = () => {
  const { emojiStore } = useRootStore();

  // @TODO: somehow deal with keys
  const formatChatMessage = (chatMessage: ChatMessage) => {
    const pushTextComponent = () => {
      components.push(
        <AppText key={`text_${new Date().getUTCMilliseconds()}`}>
          {messageString}
        </AppText>,
      );
      messageString = '';
    };

    const components = [];

    const words = chatMessage.message?.split(' ');

    let messageString = '';

    if (!words) {
      return null;
    }

    for (let word of words) {
      const sevenTvEmoji = emojiStore.sevenTvUserSet[word];
      const twitchEmoji = emojiStore.twitchSet[word];

      if (sevenTvEmoji || twitchEmoji) {
        if (messageString.trim().length) {
          pushTextComponent();
        }

        if (sevenTvEmoji) {
          components.push(
            <SevenTvEmoji
              key={`7tv_${new Date().getUTCMilliseconds()}`}
              height={sevenTvEmoji.height ?? 0}
              width={sevenTvEmoji.width ?? 0}
              animatedSource={{
                uri: sevenTvEmoji.url ?? '',
              }}
              thumbnailSource={{
                uri: sevenTvEmoji.url ?? '',
              }}
              autoplay={true}
              loop={true}
            />,
          );
        }

        if (twitchEmoji) {
          components.push(
            <TwitchEmoji
              key={`twitch_${new Date().getUTCMilliseconds()}`}
              resizeMode={'contain'}
              height={twitchEmoji.height ?? 0}
              width={twitchEmoji.width ?? 0}
              source={{
                uri: twitchEmoji.url || '',
              }}
            />,
          );
        }
      } else {
        messageString += `${word} `;
      }

      if (word === words[words.length - 1] && messageString.trim().length) {
        pushTextComponent();
      }
    }

    return <Message>{components}</Message>;
  };

  return {
    formatChatMessage,
  };
};
