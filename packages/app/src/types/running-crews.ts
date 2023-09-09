// CREATED("생성", "CREATED"),
//   READY("준비", "READY"),
//   IN_PROGRESS("진행중", "IN_PROGRESS"),
//   COMPLETED("완료", "COMPLETED"),
//   CANCELLED("취소", "CANCELLED"),
//   EXPIRED("만료", "EXPIRED"),

const RUNNING_CREW_STATUS = {
  CREATED: '생성',
  READY: '준비',
  IN_PROGRESS: '진행중',
  COMPLETED: '완료',
  CANCELLED: '취소',
  EXPIRED: '만료',
} as const;

type RunningCrewStatus = keyof typeof RUNNING_CREW_STATUS;

interface RunningCrew {
  id: number;
  title: string;
  host: number;
  location: {
    departure: {
      latitude: number;
      longitude: number;
    };
    arrival: {
      latitude: number;
      longitude: number;
    };
  };
  status: RunningCrewStatus;
  capacity: number;
  date: {
    scheduled: {
      start: string;
      end: string;
    };
    implemented: {
      start: string | null;
      end: string | null;
    };
  };
  deadline: string;
  description: string;
}

export { RUNNING_CREW_STATUS };
export type { RunningCrew, RunningCrewStatus };
