import { PATH, PATH_KEY } from 'data/pages';
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
type NavType = (typeof PATH)[PATH_KEY.MY_PAGE];

interface INavState {
  isShow: boolean;
  activeNav: NavType;
}

interface INavIconVariant {
  default: string;
  activated: string;
}

export type { IModalState, IHeaderState, NavType, INavState, INavIconVariant };
