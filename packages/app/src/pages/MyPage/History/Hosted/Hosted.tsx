import { RunningCrewQuery } from 'queries';
import React, { useMemo, useState } from 'react';
import { Spinner } from '../../../../components/common';
import HistoryCard from '../../../../components/History/Card';
import { Solid } from '../../../../components/common/Button';
import { Link } from 'react-router-dom';
import { desc, pageWrap } from './style';

function Hosted() {
  const [{ page, size }, setPagingOption] = useState({
    page: 1,
    size: 20,
  });

  const { data, status, isLoadable } = RunningCrewQuery.useGetHostedList({
    page,
    size,
  });

  const shouldPromoteHost = useMemo(() => {
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

        {shouldPromoteHost && (
          <p css={desc}>
            아직 주최하신 러닝크루가 없으시군요!
            <br /> 새로운 러닝크루를 만들어 같이 뛸 친구들을 찾아보세요!
          </p>
        )}

        {isLoadable && (
          <div>
            <Solid onClick={() => setPagingOption(prev => ({ ...prev, page: prev.page + 1 }))}>더 보기</Solid>
          </div>
        )}

        {shouldPromoteHost && (
          <div css={desc}>
            <Link to={'/running-crews'}>
              <Solid>러닝크루 생성하기</Solid>
            </Link>
          </div>
        )}
      </>
    </div>
  );
}

export default Hosted;
