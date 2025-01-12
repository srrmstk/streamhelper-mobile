import { NativeModules } from 'react-native';

import AbstractRepository from 'base/AbstractRepository';

import DonationAlertsAxiosClient from '../client/index';

const IntentModule = NativeModules.IntentModule;

export class AuthRepository extends AbstractRepository<
  typeof DonationAlertsAxiosClient
> {
  constructor() {
    super(DonationAlertsAxiosClient);
  }

  auth = (uri: string): Promise<string> => {
    return IntentModule.openIntent(uri);
  };
}
