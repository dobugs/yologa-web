import { CSSObject } from '@emotion/react';

const sectionWrapper: CSSObject = {
  margin: 'auto',
  maxWidth: 480,
  boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
};

const main = ({ isHeaderShow, isNavShow }: { isHeaderShow: boolean; isNavShow: boolean }): CSSObject => ({
  ...(isHeaderShow && { marginTop: 72 }),
  ...(isNavShow && { marginBottom: 72 }),
});

export { sectionWrapper, main };
