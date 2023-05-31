import React from 'react';
import { Card } from '../common';
import { RUNNING_CREW_STATUS, RunningCrew } from '../../types/running-crews';
import { contentList, contentTitle, statusLabel } from './style';
import dayjs from 'dayjs';

interface Props {
  data: RunningCrew;
}
function HistoryCard({ data }: Props) {
  // TODO: 러닝크루 상세 페이지 필요

  return (
    <Card key={data.id} title={data.title} meta={data.description}>
      <dl css={contentList}>
        <dt css={contentTitle}>예약시간</dt>
        <dd>
          {dayjs(data.date.scheduled.start).format('YYYY-MM-DD HH:mm')}~
          {dayjs(data.date.scheduled.end).format('YYYY-MM-DD HH:mm')}
        </dd>
        {shouldUsageVisible(data) ? (
          <>
            <dt css={contentTitle}>이용시간</dt>
            <dd>
              {dayjs(data.date.implemented.start).format('YYYY-MM-DD HH:mm')}~
              {dayjs(data.date.implemented.end).format('YYYY-MM-DD HH:mm')}
            </dd>
          </>
        ) : (
          <span css={statusLabel}>{RUNNING_CREW_STATUS[data.status]}</span>
        )}
      </dl>
    </Card>
  );
}

function shouldUsageVisible(rc: RunningCrew) {
  return rc.status === 'COMPLETED';
}

export default HistoryCard;
