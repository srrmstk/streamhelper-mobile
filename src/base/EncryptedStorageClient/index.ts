import { MMKV } from 'react-native-mmkv';

import AbstractLocalClient from '../AbstractLocalClient';

export default class EncryptedStorageClient implements AbstractLocalClient {
  storage = new MMKV();

  get = (tableName: string) => {
    const data = this.storage.getString(tableName);
    return data ? JSON.parse(data) : null;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  set = async (tableName: string, data: any) => {
    return this.storage.set(tableName, JSON.stringify(data));
  };

  removeAll = async (tableName: string) => {
    return this.storage.delete(tableName);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update = async (tableName: string, data: any) => {
    let res = await this.get(tableName);

    if (res) {
      for (let k in data) {
        res[k] = data[k];
      }
    }

    return await this.set(tableName, res);
  };
}
