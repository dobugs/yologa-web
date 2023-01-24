import { CSSObject } from '@emotion/react';

const sectionWrapper: CSSObject = {
  margin: 'auto',
  maxWidth: 480,
};

const main = ({ isHeaderShow, isNavShow }: { isHeaderShow: boolean; isNavShow: boolean }): CSSObject => ({
  ...(isHeaderShow && { marginTop: 72 }),
  ...(isNavShow && { marginBottom: 72 }),
});

export { sectionWrapper, main };
