import { AxiosClient } from 'base/AxiosClient';

class DonationAlertsAxiosClient extends AxiosClient {
  private static instance: DonationAlertsAxiosClient;

  public static getInstance(): DonationAlertsAxiosClient {
    if (!DonationAlertsAxiosClient.instance) {
      DonationAlertsAxiosClient.instance = new AxiosClient({
        baseURL: 'https://www.donationalerts.com/api/v1',
      });
    }

    return DonationAlertsAxiosClient.instance;
  }
}

export default DonationAlertsAxiosClient.getInstance();
