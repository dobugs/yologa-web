type DirectionType = 'row' | 'column';

const wrap = (direction: DirectionType = 'column') => ({
  display: 'flex',
  flexDirection: direction,
  gap: '0.4em',
});

export { wrap };
export type { DirectionType };
