import AbstractRepository from 'base/AbstractRepository';

import DonationAlertsAxiosClient from '../client/index';

export class TokenApiRepository extends AbstractRepository {
  constructor() {
    super(DonationAlertsAxiosClient);
  }

  setAccessToken = (token: string) => {
    this.client.setAccessToken(token);
  };

  clearAccessToken = () => {
    this.client.clearAccessToken();
  };
}
