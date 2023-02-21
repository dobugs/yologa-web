import React from 'react';

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

/** Nav */
type NavItemKeyType = 'my-page' | 'running-crews' | 'chat';

interface INavState {
  isShow: boolean;
  activeNav: NavItemKeyType;
}

interface INavIconVariant {
  default: string;
  activated: string;
}

export type { IModalState, IHeaderState, NavItemKeyType, INavState, INavIconVariant };
