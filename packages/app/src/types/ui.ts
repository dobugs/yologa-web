import React from 'react';
import { PATH } from 'data/pages';

interface IModalState {
  loading: boolean;
  isOpen: boolean;
  content: React.ReactNode;
}

/** Header */
interface IHeaderState {
  isShow: boolean;
  type: 'default' | 'back';
}

/** Footer */
const FooterNav = [PATH.MY_PAGE, PATH.RUNNING_CREW, PATH.CHAT] as const;
type FooterNavType = (typeof FooterNav)[number];

interface IFooterState {
  isShow: boolean;
  activeNav: FooterNavType;
}

export type { IModalState, IHeaderState, IFooterState };
