import { useEffect } from 'react';

import { useRootStore } from 'hooks/useRootStore';

import { getDonationAlertsUri } from './helpers';

export const useAlertsController = () => {
  const { donationAlertsAuthStore } = useRootStore();
  const donationAlertsUri = getDonationAlertsUri();

  const handleLogin = async () => {
    await donationAlertsAuthStore.auth(donationAlertsUri);
  };

  useEffect(() => {
    const checkAuth = async () => {
      await donationAlertsAuthStore.checkAuth();
    };

    checkAuth();
  }, [handleLogin]);

  return {
    handleLogin,
    isLoading: donationAlertsAuthStore.loadingModel.isLoading,
    isLoggedIn: donationAlertsAuthStore.accessToken,
    getLatestAlerts: donationAlertsAuthStore.getDonations,
  };
};
