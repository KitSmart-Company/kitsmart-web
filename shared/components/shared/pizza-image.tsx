import { cn } from '@/shared/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
}

export const PizzaImage: React.FC<Props> = ({ imageUrl, size, className }) => {
  return (
    <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
      <img
        src={imageUrl}
        alt="Logo"
        className={cn('relative left-2 top-2 transition-all z-10 duration-300', {
          'w-[100] h-[300px]': size === 20,
          'w-[100] h-[400px]': size === 30,
          'w-[100] h-[500px]': size === 40,
        })}
      />
    </div>
  );
};
