import { useEffect, useRef, useState } from 'react';
import { debounceTime, Subject } from 'rxjs';
import { produce } from 'immer';

const PERMISSIONS = {
  GEOLOCATION: 'geolocation',
} as const;

const PERMISSION_STATUS_TEXT = {
  granted: '허용',
  denied: '거부',
  prompt: '요청',
  unset: '',
} as const;

type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];
type PermissionStatusText = (typeof PERMISSION_STATUS_TEXT)[keyof typeof PERMISSION_STATUS_TEXT];

interface IPermissionResult {
  key: Permission;
  status: PermissionState | 'unset';
}

interface IPermissionState extends IPermissionResult {
  text: PermissionStatusText;
}

const initialResultState: Omit<IPermissionState, 'key'> = {
  status: 'unset',
  text: PERMISSION_STATUS_TEXT['denied'],
};

function usePermissions(permissions: Permission[]) {
  const resultRef = useRef<Subject<IPermissionResult>>(new Subject());
  const [results, setResults] = useState<Record<Permission, Omit<IPermissionState, 'key'>>>({
    geolocation: initialResultState,
  });

  useEffect(() => {
    const resultMap = new Map<Permission, PermissionState>();

    const buffered = resultRef.current.pipe(debounceTime(200));
    buffered.subscribe(({ key, status }) => {
      resultMap.set(key, status as PermissionState);
      setResults(base =>
        produce(base, draft => {
          draft[key] = {
            status,
            text: PERMISSION_STATUS_TEXT[status as PermissionState],
          };
          return draft;
        }),
      );
    });
  }, []);

  const recheck = () => {
    permissions.forEach(name => {
      navigator.permissions.query({ name }).then(({ state }) => {
        resultRef.current.next({ key: name, status: state });
      });
    });
  };

  useEffect(() => {
    recheck();
  }, []);

  return {
    results,
    recheck,
  };
}

export type { IPermissionResult, IPermissionState };
export { PERMISSIONS };
export default usePermissions;
