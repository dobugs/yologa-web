import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  width?: number;
}

const dataUrlToBlob = (dataUrl: string) => {
  return fetch(dataUrl).then(res => res.blob());
};

function useImageResize(props?: Props) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [resized, setResized] = useState<File | null>(null);
  const fileRef = useRef<File | null>(null);

  const resize = useCallback((file: File) => {
    fileRef.current = file;
    const fr = new FileReader();

    fr.onload = e => {
      const img = document.createElement('img');

      img.onload = _ => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const { naturalWidth, naturalHeight } = img;
        const aspectRatio = naturalHeight / naturalWidth;

        const width = props?.width ?? 320;
        const height = Math.floor(width * aspectRatio);

        if (!ctx) {
          throw Error('canvas context not found');
        }

        ctx.canvas.width = width;
        ctx.canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL(file.type);

        setDataUrl(dataUrl);
      };

      img.src = e.target?.result as string;
    };

    fr.readAsDataURL(file);
  }, []);

  useEffect(() => {
    if (!dataUrl) return;

    dataUrlToBlob(dataUrl).then(blob => {
      if (!fileRef.current) return;
      const { name, lastModified, type } = fileRef.current;

      const resized = new File([blob], name, {
        lastModified,
        type,
      });

      setResized(resized);
    });
  }, [dataUrl]);

  return {
    resize,
    value: resized,
  };
}

export default useImageResize;
