import clsx from 'clsx';
import React from 'react';

type TypographyProps = {
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: string;
  color?: string;
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  children,
  as = 'p',
  variant = 'base',
  color = 'black',
  ...rest
}) => {
  return React.createElement(
    as,
    {
      className: clsx(
        [
          variant === 'h1' && ['text-[3rem] leading-[3rem]'],
          variant === 'h2' && ['text-[2.25rem] leading-[2.5rem]'],
          variant === 'h3' && ['text-[1.875rem] leading-[2.25rem]'],
          variant === 'h4' && ['text-[1.5rem] leading-[2rem]'],
          variant === 'h5' && ['text-[1.25rem] leading-[1.75rem]'],
          variant === 'h6' && ['text-[1.175rem] leading-[1.5rem]'],
          variant === 's1' && ['text-[1rem] leading-[1.5rem]'],
          variant === 's2' && ['text-[0.875rem] leading-[1.5rem]'],
          variant === 'b1' && ['text-[1rem]'],
          variant === 'b2' && ['text-[0.875rem]'],
        ],
        [
          color === 'primary' && ['text-fuchsia-500'],
          color === 'secondary' && ['text-red-500'],
          color === 'tertiary' && ['text-green-500'],
          color === 'quartenary' && ['text-blue-500'],
        ]
      ),
      ...rest,
    },
    children
  );
};

export default Typography;
