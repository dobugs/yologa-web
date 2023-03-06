import { CSSObject } from '@emotion/react';
import { theme } from 'styles';

const headerHeight = 48 as const;
const navHeight = 48 as const;

const sectionWrapper = ({ isHeaderShow, isNavShow }: { isHeaderShow: boolean; isNavShow: boolean }): CSSObject => ({
  position: 'relative',
  margin: 'auto',
  maxWidth: 640,
  minHeight: `calc(100 * var(--vh) - ${isHeaderShow ? headerHeight : 0}px - ${isNavShow ? navHeight : 0}px)`,
  backgroundColor: theme.color.white,
});

const main = ({ isHeaderShow, isNavShow }: { isHeaderShow: boolean; isNavShow: boolean }): CSSObject => ({
  ...(isHeaderShow && { marginTop: headerHeight }),
  ...(isNavShow && { marginBottom: navHeight }),
  backgroundColor: theme.color.base,
});

export { headerHeight, navHeight, sectionWrapper, main };
