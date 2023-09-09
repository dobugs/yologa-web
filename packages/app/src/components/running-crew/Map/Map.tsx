import React, { useEffect } from 'react';
import GoogleMap from 'components/GoogleMap';
import { wrap } from './style';
import useToastMessage from 'hooks/useToastMessage';
import { usePosition } from '../../providers/PositionProvider';
import type { IPosition } from '@common/map';
import { useRecoilState } from 'recoil';
import { watchState } from 'stores/map';

function Map() {
  const toast = useToastMessage();
  const { watch, clear, status } = usePosition();

  const [watchInfo, setWatchInfo] = useRecoilState(watchState);

  useEffect(() => {
    if (status === 'error') {
      toast.error('현재위치를 받아올 수 없습니다.');
    }
  }, [status]);

  useEffect(() => {
    watch((position: IPosition) => {
      setWatchInfo({
        position,
        status: 'watching',
      });
    });

    return () => {
      clear();
    };
  }, []);

  return (
    <div css={wrap}>
      <GoogleMap currentPosition={watchInfo.position} markers={[]} />
    </div>
  );
}

export default Map;
