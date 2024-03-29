import React from 'react';

interface IModalState {
  title: React.ReactNode;
  content: React.ReactNode;
}

interface IAlertState {
  content: React.ReactNode;
}

/** Header */
interface IHeaderState {
  isShow: boolean;
  type: 'default' | 'back';
}

/** Nav */
type NavItemKeyType = 'my-page' | 'running-crews';

interface INavState {
  isShow: boolean;
  activeNav: NavItemKeyType;
}

interface INavIconVariant {
  default: string;
  activated: string;
}

interface ILayerState {
  close?: boolean;
  onClose?: () => void;
  content: React.ReactNode;
}

export type { IModalState, IAlertState, IHeaderState, NavItemKeyType, INavState, INavIconVariant, ILayerState };
