import { CONFIG } from 'constants/config';

const { DONATIONALERTS_AUTH_URL, DONATIONALERTS_CLIENT_ID, REDIRECT_URI } =
  CONFIG;

const scopes = ['oauth-donation-subscribe', 'oauth-donation-index'];

export const getDonationAlertsUri = () => {
  return `${DONATIONALERTS_AUTH_URL}?client_id=${DONATIONALERTS_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=${scopes.join(
    ' ',
  )}`;
};
