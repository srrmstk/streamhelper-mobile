import { LoadingModel } from 'base/LoadingModel';
import { makeAutoObservable } from 'mobx';
import { ToastService } from 'modules/Toast/toastService';

import { AlertsService } from './alertsService';
import { AlertModel } from './models/alertModel';

export class AlertsStore {
  private service: AlertsService;
  private loadingModel: LoadingModel;
  private toastService: ToastService;

  alerts: AlertModel[] = [];

  constructor() {
    makeAutoObservable(this);

    this.service = new AlertsService();
    this.loadingModel = new LoadingModel();
    this.toastService = new ToastService();
  }

  getDonations = async () => {
    this.loadingModel.setIsLoading(true);

    try {
      const alerts = await this.service.getDonations();
      this.setAlerts(alerts);
    } catch (error) {
      this.toastService.showErrorToast({
        title: 'Error',
        description: 'Error while fetching donations',
      });
    } finally {
      this.loadingModel.setIsLoading(false);
    }
  };

  private setAlerts = (alerts: AlertModel[]) => {
    this.alerts = alerts;
  };
}
