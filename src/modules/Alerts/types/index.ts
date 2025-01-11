export enum EDonationMessageType {
  Text = 'text',
  Audio = 'audio',
}

type TDonationData = {
  id: number;
  name: string;
  username: string;
  message_type: EDonationMessageType;
  message: string;
  amount: number;
  currency: string;
  is_shown: number;
  created_at: string;
  shown_at?: string;
};

type TDonationLinks = {
  first: string;
  last: string;
  prev?: string;
  next?: string;
};

type TDonationMeta = {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type TGetDonationsResponse = {
  data: TDonationData[];
  links: TDonationLinks;
  meta: TDonationMeta;
};
