interface ILoader {
  src: string;
  onLoad: () => unknown;
  onError: () => unknown;
  load: () => Promise<unknown>;
}

class Loader implements ILoader {
  constructor(
    public readonly src: string,
    public readonly onLoad: () => unknown,
    public readonly onError: () => unknown,
  ) {
    this.src = src;
    this.onLoad = onLoad;
    this.onError = onError;
  }

  load = () =>
    new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = this.src;
      script.defer = true;
      script.async = true;
      script.onload = () => {
        resolve(this.onLoad());
      };

      script.onerror = () => {
        reject(this.onError());
      };

      document.head.appendChild(script);
    });
}

export default Loader;
