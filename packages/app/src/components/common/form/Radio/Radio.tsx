import React from 'react';
import { wrap } from './style';

interface Props<T extends string> extends React.InputHTMLAttributes<HTMLInputElement> {
  handleClick?: (val: T) => void;
  current: T;
}

function Radio<T extends string>(
  { handleClick, children, current, value, ...props }: React.PropsWithChildren<Props<T>>,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <label css={wrap}>
      <input
        {...props}
        ref={ref}
        type="radio"
        value={value}
        checked={current === value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const { value } = e.target;
          handleClick?.(value as T);
        }}
      />
      {children}
    </label>
  );
}

export default React.forwardRef(Radio);
