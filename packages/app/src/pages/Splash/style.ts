import { CSSObject, keyframes } from '@emotion/react';
import YologaBackground from 'assets/images/yologa-background.svg';

const splashBackground: CSSObject = {
  backgroundImage: `url(${YologaBackground})`,
  backgroundSize: `min(calc(690px * 1.8), 180vw)`,
  backgroundRepeat: `no-repeat`,
  backgroundPosition: `center`,
  backgroundColor: `#f5be29`,
};

const wrap: CSSObject = {
  width: '100%',
  height: 'calc(var(--vh, 1vh) * 100)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  ...splashBackground,
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

export { wrap, logoArea, splashBackground };
