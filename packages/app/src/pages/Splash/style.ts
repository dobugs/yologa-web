import { CSSObject, keyframes } from '@emotion/react';

const wrap: CSSObject = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#fff',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const appear = keyframes`
  0%{
    transform: translateY(-8px);
    opacity: 0;    
  }
  90% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const logoArea: CSSObject = {
  margin: 'auto',
  maxWidth: 288,
  padding: 24,
  animation: `${appear} 1s ease-out`,

  '& > img': {
    width: '100%',
    hegiht: '100%',
    objectFit: 'contain',
  },
};

export { wrap, logoArea };
