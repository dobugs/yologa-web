import React, { HTMLAttributes } from 'react';
import { wrap } from './style';

interface Props<T> extends Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  handleSubmit?: (data: T) => void;
}

function Form<T>({ handleSubmit: submit, children, ...props }: Props<T>) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submit?.(Object.fromEntries(new FormData(e.currentTarget).entries()) as T);
  };

  return (
    <form css={wrap} {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}

export default Form;
