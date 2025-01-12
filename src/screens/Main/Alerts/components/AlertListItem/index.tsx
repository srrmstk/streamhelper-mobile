import { FC, memo, useMemo } from 'react';

import { AlertModel } from 'modules/Alerts/models/alertModel';
import { EDonationMessageType } from 'modules/Alerts/types';

import { Amount, Author, Container, Header, Message } from './styled';

type TAlertListItemProps = {
  item: AlertModel;
};

export const AlertListItem: FC<TAlertListItemProps> = memo(
  ({ item }) => {
    const donationAmount = useMemo(
      () => `${item.amount} ${item.currency}`,
      [item.amount, item.currency],
    );

    if (item.messageType !== EDonationMessageType.Text) {
      return null;
    }

    return (
      <Container>
        <Header>
          <Author numberOfLines={1}>{item.userName ?? 'Anonymous'}</Author>
          <Amount>{donationAmount}</Amount>
        </Header>
        {item.message && <Message>{item.message}</Message>}
      </Container>
    );
  },
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id,
);
