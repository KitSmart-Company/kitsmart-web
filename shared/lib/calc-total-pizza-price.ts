import { Ingredient, ProductItem } from '@prisma/client';
import { ProducstSize, ProducstType } from '../constants/product';

/**
 * Функция для подсчета общей стоимости 
 *
 * @param type - тип теста выбранной 
 * @param size - размер выбранной 
 * @param items - список   вариаций
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 *
 * @returns number общую стоимость
 */
export const calcTotalPizzaPrice = (
  type: ProducstSize,
  size: ProducstType,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const pizzaPrice =
    items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;

  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(ingredient.id))
    .reduce((acc, ingredient) => acc + ingredient.price, 0);

  return pizzaPrice + totalIngredientsPrice;
};
