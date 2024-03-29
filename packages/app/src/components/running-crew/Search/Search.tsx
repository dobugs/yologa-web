import React from 'react';
import { box, wrap } from './style';
import { useRecoilValue } from 'recoil';
import { MapStore } from 'stores';
import useLayer from 'hooks/useLayer';
import Portal from 'components/layout/Portal';
import { Textfield } from 'components/common';

function Search() {
  const { value, center, isCurrent } = useRecoilValue(MapStore.searchState);
  const { add } = useLayer();

  return (
    <Portal>
      <div css={wrap}>
        <div css={box}>
          <Textfield
            value={isCurrent ? '현재 위치 검색' : value}
            placeholder={'내 주변의 러닝 크루 검색하기'}
            type="text"
            readOnly
            // onClick={_ =>
            //   add({
            //     content: <Result />,
            //     close: true,
            //   })
            // }
          />
        </div>
      </div>
    </Portal>
  );
}

export default Search;
