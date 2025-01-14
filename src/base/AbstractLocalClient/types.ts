export default interface IAbstractLocalClient {
  get: (tableName: string) => Promise<any>;
  set: (tableName: string, data: any) => Promise<any>;
  update: (tableName: string, data: any) => Promise<any>;
  removeAll: (tableName: string) => Promise<any>;
}
