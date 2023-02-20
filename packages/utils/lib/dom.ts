const createIframe = ({ wrapper, url }: { wrapper: HTMLDivElement; url: string }) => {
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.style.width = '0px';
  iframe.style.height = '0px';
  iframe.style.zIndex = '-1';
  iframe.style.position = 'fixed';
  wrapper.appendChild(iframe);
  return iframe;
};

export { createIframe };
