import { AxiosClient } from 'base/AxiosClient';

class DonationAlertsAxiosClient extends AxiosClient {
  private static instance: DonationAlertsAxiosClient;

  public static getInstance(): DonationAlertsAxiosClient {
    if (!DonationAlertsAxiosClient.instance) {
      DonationAlertsAxiosClient.instance = new AxiosClient();
    }

    return DonationAlertsAxiosClient.instance;
  }
}

export default DonationAlertsAxiosClient.getInstance();
