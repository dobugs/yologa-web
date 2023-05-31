import React, { ForwardedRef, HTMLAttributes } from 'react';
import { wrap } from './style';

interface ISelectOption<T> {
  name: string;
  value: T;
  disabled?: boolean;
}

interface Props<T extends string | number> extends HTMLAttributes<HTMLSelectElement> {
  options: ISelectOption<T>[];
  handleChange: (val: T) => void;
}

function Select<T extends string | number>(
  { options, handleChange, ...props }: Props<T>,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  return (
    <select {...props} css={wrap} ref={ref} onChange={e => handleChange(e.target.value as T)}>
      {options.map(o => (
        <option key={o.name} value={o.value}>
          {o.name}
        </option>
      ))}
    </select>
  );
}

export default React.forwardRef(Select);
