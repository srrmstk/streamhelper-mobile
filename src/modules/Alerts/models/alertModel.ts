import { jsonName, jsonProperty, Serializable } from 'ts-serializable';

export class AlertModel extends Serializable {
  @jsonProperty(Number, null)
  id: number | null = null;

  @jsonName('username')
  @jsonProperty(String, null)
  userName: string | null = null;

  @jsonProperty(String, null)
  message: string | null = null;

  @jsonProperty(Number, null)
  amount: number | null = null;

  @jsonProperty(String, null)
  currency: string | null = null;

  @jsonName('message_type')
  @jsonProperty(String, null)
  messageType: string | null = null;
}
