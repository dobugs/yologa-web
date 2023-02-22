const hydrateIframe = ({ iframe, url }: { iframe: HTMLIFrameElement; url: string }) => {
  iframe.src = url;
  iframe.style.width = '0px';
  iframe.style.height = '0px';
  iframe.style.zIndex = '-1';
  iframe.style.position = 'fixed';

  return iframe;
};

export { hydrateIframe };
