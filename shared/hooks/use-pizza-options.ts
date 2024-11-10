import { ProducstSize, ProducstType } from '@/shared/constants/product';
import React from 'react';
import { Variant } from '../components/shared/group-variants';
import { useSet } from 'react-use';
import { getAvailablePizzaSizes } from '../lib';
import { ProductItem } from '@prisma/client';

interface ReturnProps {
  size: ProducstSize;
  type: ProducstType;
  selectedIngredients: Set<number>;
  availableSizes: Variant[];
  currentItemId?: number;
  setSize: (size: ProducstSize) => void;
  setType: (size: ProducstType) => void;
  addIngredient: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<ProducstSize>(20);
  const [type, setType] = React.useState<ProducstType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<number>([]));

  const availableSizes = getAvailablePizzaSizes(type, items);

  const currentItemId = items.find((item) => item.pizzaType === type && item.size === size)?.id;

  React.useEffect(() => {
    const isAvailableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled,
    );
    const availableSize = availableSizes?.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as ProducstSize);
    }
  }, [type]);

  return {
    size,
    type,
    selectedIngredients,
    availableSizes,
    currentItemId,
    setSize,
    setType,
    addIngredient,
  };
};
