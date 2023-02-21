import { INavIconVariant, NavItemKeyType } from 'types/ui';

import IcProfile from 'assets/svg/ic-profile.svg';
import IcProfileFilled from 'assets/svg/ic-profile-filled.svg';
import IcRunning from 'assets/svg/ic-running.svg';
import IcRunningFilled from 'assets/svg/ic-running-filled.svg';
import IcChat from 'assets/svg/ic-chat.svg';
import IcChatFilled from 'assets/svg/ic-chat-filled.svg';

const ITEMS: { icon: INavIconVariant; path: NavItemKeyType }[] = [
  {
    icon: {
      default: IcProfile,
      activated: IcProfileFilled,
    },
    path: 'my-page',
  },
  {
    icon: {
      default: IcRunning,
      activated: IcRunningFilled,
    },
    path: 'running-crews',
  },
  {
    icon: {
      default: IcChat,
      activated: IcChatFilled,
    },
    path: 'chat',
  },
];

export { ITEMS };
