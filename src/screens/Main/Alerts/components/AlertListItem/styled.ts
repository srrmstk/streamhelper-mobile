import { AppText } from 'components';
import styled from 'styled-components/native';
import { EColors } from 'theme/colors';

export const Container = styled.View`
  padding: 8px 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const Author = styled(AppText)`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Amount = styled(AppText)`
  margin-bottom: 4px;
  color: ${EColors.Donation};
`;

export const Message = styled(AppText)`
  margin-bottom: 4px;
`;
