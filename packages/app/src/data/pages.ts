const PATH_KEY = {
  ROOT: 'ROOT',
  LOGIN: 'LOGIN',
  OAUTH: 'OAUTH',

  /** 마이페이지 */
  MY_PAGE: 'MY_PAGE',
  PROFILE: 'PROFILE',
  NOTIFICATION: 'NOTIFICATION',
  NOTIFICATION_DETAIL: 'NOTIFICATION_DETAIL',
  HISTORY: 'HISTORY',
  GUIDE: 'GUIDE',
  SETTINGS: 'SETTINGS',

  RUNNING_CREW: 'RUNNING_CREW',
  RUNNING_CREW_CREATE: 'RUNNING_CREW_CREATE',
  RUNNING_CREW_DETAIL: 'RUNNING_CREW_DETAIL',
  RUNNING_CREW_DETAIL_EDIT: 'RUNNING_CREW_DETAIL_EDIT',
  RUNNING_CREW_DETAIL_CHAT: 'RUNNING_CREW_DETAIL_CHAT',

  CHAT: 'CHAT',
  CHAT_DETAIL: 'CHAT_DETAIL',

  // utils
  UNDEFINED: 'UNDEFINED',
} as const;

const PATH: Record<(typeof PATH_KEY)[keyof typeof PATH_KEY], string> = {
  [PATH_KEY.ROOT]: '',
  [PATH_KEY.LOGIN]: 'login',
  [PATH_KEY.OAUTH]: 'oauth',

  /** 마이페이지 */
  [PATH_KEY.MY_PAGE]: 'my-page',
  [PATH_KEY.PROFILE]: 'my-page/profile',
  [PATH_KEY.NOTIFICATION]: 'my-page/notification',
  [PATH_KEY.NOTIFICATION_DETAIL]: 'my-page/notification/:id',
  [PATH_KEY.HISTORY]: 'my-page/history',
  [PATH_KEY.GUIDE]: 'my-page/guide',
  [PATH_KEY.SETTINGS]: 'my-page/settings',

  [PATH_KEY.RUNNING_CREW]: 'running-crews',
  [PATH_KEY.RUNNING_CREW_CREATE]: 'running-crews/create',
  [PATH_KEY.RUNNING_CREW_DETAIL]: 'running-crews/:id',
  [PATH_KEY.RUNNING_CREW_DETAIL_EDIT]: 'running-crews/:id/edit',
  [PATH_KEY.RUNNING_CREW_DETAIL_CHAT]: 'running-crews/:id/chat',

  [PATH_KEY.CHAT]: 'chat',
  [PATH_KEY.CHAT_DETAIL]: 'chat/:id',

  [PATH_KEY.UNDEFINED]: '*',
} as const;

export { PATH_KEY, PATH };
