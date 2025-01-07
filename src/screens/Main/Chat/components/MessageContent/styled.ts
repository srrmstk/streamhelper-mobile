import { AppText } from 'components';
import AnimatedWebP from 'react-native-animated-webp';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Message = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SevenTvEmoji = styled(AnimatedWebP)<{
  height: number;
  width: number;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin-left: 2px;
  margin-right: 2px;
`;

export const TwitchEmoji = styled(FastImage)<{ height: number; width: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin-left: 2px;
  margin-right: 2px;
`;

export const MessageContainer = styled.TouchableOpacity<{ isDeleted: boolean }>`
  flex: 1;
  padding: 8px 16px;
  opacity: ${({ isDeleted }) => (isDeleted ? 0.4 : 1)};
`;

export const Author = styled(AppText)<{ color: string | null }>`
  font-weight: bold;
  margin-bottom: 4px;
  color: ${({ color }) => color};
`;
