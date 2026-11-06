'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { Button as BaseButton } from '@base-ui/react/button';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading: boolean;
  className: string;
};
const Button = ({
  children,
  loading = false,
  disabled,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) => {
  return (
    <BaseButton
      type="submit"
      disabled={disabled}
      className={cn(
        'rounded-xl bg-neutral-800 px-3 py-1.5 text-base text-neutral-50 select-none',
        className
      )}
    >
      <AnimatePresence>
        {loading ? <motion.span initial>loading...</motion.span> : children}
      </AnimatePresence>
    </BaseButton>
  );
};

export { Button };
