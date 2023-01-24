import { INavIconVariant, NavType } from 'types/ui';

import IcProfile from 'assets/svg/ic-profile.svg';
import IcProfileFilled from 'assets/svg/ic-profile-filled.svg';
import IcRunning from 'assets/svg/ic-running.svg';
import IcRunningFilled from 'assets/svg/ic-running-filled.svg';
import IcChat from 'assets/svg/ic-chat.svg';
import IcChatFilled from 'assets/svg/ic-chat-filled.svg';
import { PATH } from './pages';

const ITEMS: { icon: INavIconVariant; path: NavType }[] = [
  {
    icon: {
      default: IcProfile,
      activated: IcProfileFilled,
    },
    path: PATH.MY_PAGE,
  },
  {
    icon: {
      default: IcRunning,
      activated: IcRunningFilled,
    },
    path: PATH.RUNNING_CREW,
  },
  {
    icon: {
      default: IcChat,
      activated: IcChatFilled,
    },
    path: PATH.CHAT,
  },
];

export { ITEMS };
