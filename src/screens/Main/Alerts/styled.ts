import { ScreenContainer } from 'components';
import styled from 'styled-components/native';
import { EColors } from 'theme/colors';

export const Container = styled(ScreenContainer)`
  margin: 0 -16px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${EColors.Black};
  opacity: 0.1;
`;
