import { ProducstSize, ProducstType, mapProductType } from '../constants/product';
import { CartStateItem } from './get-cart-details';

export const getCartItemDetails = (
  ingredients: CartStateItem['ingredients'],
  pizzaType?: ProducstType,
  pizzaSize?: ProducstSize,
): string => {
  const details = [];

  if (pizzaSize && pizzaType) {
    const typeName = mapProductType[pizzaType];
    details.push(`${typeName} ${pizzaSize} см`);
  }

  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }

  return details.join(', ');
};
