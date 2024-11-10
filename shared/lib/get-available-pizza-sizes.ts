import { ProductItem } from '@prisma/client';
import { ProducstType, ProductSizes } from '../constants/product';
import { Variant } from '../components/shared/group-variants';

export const getAvailablePizzaSizes = (type: ProducstType, items: ProductItem[]): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);

  return ProductSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));
};
