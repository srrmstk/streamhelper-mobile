import { AxiosResponse } from 'axios';
import AbstractRepository from 'base/AbstractRepository';
import DonationAlertsAxiosClient from 'modules/DonationAlertsAuth/client';

import { TGetDonationsResponse } from './types';

export class AlertsRepository extends AbstractRepository<
  typeof DonationAlertsAxiosClient
> {
  constructor() {
    super(DonationAlertsAxiosClient);
  }

  getDonations = (): Promise<AxiosResponse<TGetDonationsResponse>> => {
    return this.client.get({
      url: '/alerts/donations',
    });
  };
}
