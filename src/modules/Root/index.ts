import React from 'react';

import { AlertsStore } from 'modules/Alerts/alertsStore';
import { ChatStore } from 'modules/Chat/chatStore';
import { DonationAlertsAuthStore } from 'modules/DonationAlertsAuth/donationAlertsAuthStore';
import { EmojiStore } from 'modules/Emoji/emojiStore';
import { AuthStore } from 'modules/TwitchAuth/authStore';
import { UserStore } from 'modules/User/userStore';

class RootStore {
  authStore = new AuthStore();
  userStore = new UserStore();
  chatStore = new ChatStore(this.userStore);
  emojiStore = new EmojiStore();
  donationAlertsAuthStore = new DonationAlertsAuthStore();
  alertsStore = new AlertsStore();
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
