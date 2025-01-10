import { AppButton, AppText } from 'components';
import { LOCALES } from 'constants/locales';
import { observer } from 'mobx-react';

import { Container } from './styled';
import { useAlertsController } from './useAlertsController';

export const AlertScreen = observer(() => {
  const { handleLogin, isLoading, isLoggedIn } = useAlertsController();

  return (
    <Container>
      {!isLoggedIn ? (
        <AppButton
          title={LOCALES.Login}
          onPress={handleLogin}
          isLoading={isLoading}
        />
      ) : (
        <AppText>Alerts</AppText>
      )}
    </Container>
  );
});
