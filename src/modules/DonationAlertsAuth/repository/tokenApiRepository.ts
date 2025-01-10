import AbstractRepository from 'base/AbstractRepository';

export class TokenApiRepository extends AbstractRepository {
  constructor() {
    super();
  }

  setAccessToken = (token: string) => {
    this.client.setAccessToken(token);
  };

  clearAccessToken = () => {
    this.client.clearAccessToken();
  };
}
