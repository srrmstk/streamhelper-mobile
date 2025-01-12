import { ModelFactory } from 'base/ModelFactory';

import { AlertsRepository } from './alertsRepository';
import { AlertModel } from './models/alertModel';

export class AlertsService {
  private repository: AlertsRepository;

  constructor() {
    this.repository = new AlertsRepository();
  }

  getDonations = async () => {
    const result = await this.repository.getDonations();
    const alerts: AlertModel[] = [];

    result.data.data.forEach(item => {
      const model = ModelFactory.create(AlertModel, item);
      alerts.push(model);
    });

    return alerts;
  };
}
