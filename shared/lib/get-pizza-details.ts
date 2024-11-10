import { calcTotalPizzaPrice } from './calc-total-pizza-price';
import { Ingredient, ProductItem } from '@prisma/client';
import { ProducstSize, ProducstType, mapProductType } from '../constants/product';

export const getPizzaDetails = (
  type: ProducstType,
  size: ProducstSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
  const textDetaills = `${size} см, ${mapProductType[type]} пицца`;

  return { totalPrice, textDetaills };
};
