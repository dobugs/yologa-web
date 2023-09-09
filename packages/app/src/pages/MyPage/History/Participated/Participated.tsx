import { RunningCrewQuery } from 'queries';
import React, { useMemo, useState } from 'react';
import { Spinner } from '../../../../components/common';
import HistoryCard from '../../../../components/History/Card';
import { Solid } from '../../../../components/common/Button';
import { Link } from 'react-router-dom';
import { pageWrap, desc } from './style';

function Participated() {
  const [{ page, size }, setPagingOption] = useState({
    page: 1,
    size: 20,
  });

  const { data, status, isLoadable } = RunningCrewQuery.useGetParticipatedList({
    page,
    size,
  });

  const shouldPromoteParticipate = useMemo(() => {
    return data?.content.length === 0 && status === 'success';
  }, [data, status]);

  return (
    <div css={pageWrap}>
      <>
        {status === 'loading' && <Spinner />}
        {data?.content.map(rc => {
          return <HistoryCard key={rc.id} data={rc} />;
        })}

        {status === 'error' && <p>서버 오류로 데이터를 받아올 수 없습니다.</p>}

        {shouldPromoteParticipate && (
          <p css={desc}>
            주변의 런닝크루를 찾아보세요!
            <br /> 좋은 사람들과 같이 뛴다면 훨씬 더 가볍게 시작할 수 있을 거예요.
          </p>
        )}

        {isLoadable && (
          <div>
            <Solid onClick={() => setPagingOption(prev => ({ ...prev, page: prev.page + 1 }))}>더 보기</Solid>
          </div>
        )}

        {shouldPromoteParticipate && (
          <div css={desc}>
            <Link to={'/running-crews'}>
              <Solid>러닝크루 참여하기</Solid>
            </Link>
          </div>
        )}
      </>
    </div>
  );
}

export default Participated;
