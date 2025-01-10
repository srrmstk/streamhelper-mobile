import { CONFIG } from 'constants/config';

const { DONATIONALERTS_AUTH_URL, DONATIONALERTS_CLIENT_ID, REDIRECT_URI } =
  CONFIG;

export const getDonationAlertsUri = () => {
  return `${DONATIONALERTS_AUTH_URL}?client_id=${DONATIONALERTS_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=oauth-donation-subscribe`;
};
