import { useEffect } from 'react';

import { useRootStore } from 'hooks/useRootStore';
import { AlertModel } from 'modules/Alerts/models/alertModel';

import { getDonationAlertsUri } from './helpers';

export const useAlertsController = () => {
  const { donationAlertsAuthStore, alertsStore } = useRootStore();
  const donationAlertsUri = getDonationAlertsUri();

  const handleLogin = async () => {
    await donationAlertsAuthStore.auth(donationAlertsUri);
  };

  useEffect(() => {
    const checkAuth = async () => {
      const res = await donationAlertsAuthStore.checkAuth();

      if (res) {
        await alertsStore.getDonations();
      }
    };

    checkAuth();
  }, [handleLogin]);

  const keyExtractor = (item: AlertModel) => `${item.id}`;

  return {
    handleLogin,
    isLoading: donationAlertsAuthStore.loadingModel.isLoading,
    isLoggedIn: donationAlertsAuthStore.accessToken,
    getLatestAlerts: alertsStore.getDonations,
    alerts: alertsStore.alerts,
    keyExtractor,
  };
};
