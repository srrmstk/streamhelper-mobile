import React, { useCallback } from 'react';
import { FlatList, ListRenderItem, RefreshControl } from 'react-native';

import { AppButton } from 'components';
import { LOCALES } from 'constants/locales';
import { observer } from 'mobx-react';
import { AlertModel } from 'modules/Alerts/models/alertModel';

import { AlertListItem } from './components/AlertListItem';
import { Container } from './styled';
import { useAlertsController } from './useAlertsController';

export const AlertScreen = observer(() => {
  const {
    handleLogin,
    isLoading,
    isLoggedIn,
    getLatestAlerts,
    alerts,
    keyExtractor,
  } = useAlertsController();

  const renderItem: ListRenderItem<AlertModel> = useCallback(
    ({ item }) => <AlertListItem item={item} />,
    [],
  );

  if (!isLoggedIn) {
    return (
      <Container>
        <AppButton
          title={LOCALES.Login}
          onPress={handleLogin}
          isLoading={isLoading}
        />
      </Container>
    );
  }

  return (
    <Container>
      <FlatList<AlertModel>
        keyExtractor={keyExtractor}
        data={alerts}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getLatestAlerts} />
        }
        // ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
});
