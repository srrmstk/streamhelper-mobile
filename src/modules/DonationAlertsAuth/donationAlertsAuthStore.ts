import { LoadingModel } from 'base/LoadingModel';
import { makeAutoObservable } from 'mobx';
import { ToastService } from 'modules/Toast/toastService';

import { AuthService } from './service/authService';
import { TokenService } from './service/tokenService';

export class DonationAlertsAuthStore {
  private authService: AuthService;
  private tokenService: TokenService;
  private toastService: ToastService;

  loadingModel = new LoadingModel();
  accessToken: string | null = null;

  constructor() {
    makeAutoObservable(this);

    this.authService = new AuthService();
    this.tokenService = new TokenService();
    this.toastService = new ToastService();
  }

  auth = async (uri: string) => {
    this.loadingModel.setIsLoading(true);

    try {
      const token = await this.authService.auth(uri);

      if (token) {
        this.tokenService.saveToken(token);
        this.setAccessToken(token);
      }

      return true;
    } catch (error) {
      this.toastService.showErrorToast();
      return false;
    } finally {
      this.loadingModel.setIsLoading(false);
    }
  };

  checkAuth = async () => {
    try {
      const token = await this.tokenService.getToken();

      if (token) {
        this.setAccessToken(token);
      }

      return !!token.trim();
    } catch (e) {
      return false;
    }
  };

  logout = async () => {
    await this.tokenService.deleteToken();
    this.setAccessToken(null);

    return true;
  };

  setAccessToken = (value: string | null) => {
    this.accessToken = value;
  };
}
