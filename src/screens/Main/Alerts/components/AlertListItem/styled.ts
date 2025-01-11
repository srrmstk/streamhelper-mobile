import { AppText } from 'components';
import styled from 'styled-components/native';
import { EColors } from 'theme/colors';

export const Container = styled.View`
  padding: 8px 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  border-bottom-color: ${EColors.Gray};
`;

export const Author = styled(AppText)`
  flex: 1;
  font-weight: bold;
`;

export const Amount = styled(AppText)`
  color: ${EColors.Donation};
`;

export const Message = styled(AppText)`
  margin-top: 4px;
`;
