const pipe =
  (...fns: ((...args: any) => void)[]) =>
  (x: any) =>
    fns.reduce((v, f) => f(v), x);

export { pipe };
