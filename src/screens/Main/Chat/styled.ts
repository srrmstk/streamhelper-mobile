import { AppText, ScreenContainer } from 'components';
import styled from 'styled-components/native';
import { EColors } from 'theme/colors';
import { TYPOGRAPHY } from 'theme/typography';

export const Container = styled(ScreenContainer)`
  margin: 0 -16px;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: ${EColors.Black};
  opacity: 0.1;
`;

export const BottomSheetContainer = styled.View`
  padding: 16px;
`;

export const NotConnectedContainer = styled.View`
  background-color: ${EColors.Danger};
  margin-top: 8px;
  padding: 4px;
  align-items: center;
`;

export const ContainerText = styled(AppText)`
  ${TYPOGRAPHY.Callout}
  color: ${EColors.White}
`;

export const ScrollDisabledContainer = styled.View`
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  background-color: ${EColors.Gray};
  padding: 4px;
  align-items: center;
`;
