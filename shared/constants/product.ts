export const mapProductSize = {
  20: 'Маленькая',
  30: 'Средняя',
  40: 'Большая',
} as const;

export const mapProductType = {
  1: 'традиционная',
  2: 'тонкая',
} as const;

export const ProductSizes = Object.entries(mapProductSize).map(([value, name]) => ({
  name,
  value,
}));

export const ProductTypes = Object.entries(mapProductType).map(([value, name]) => ({
  name,
  value,
}));

export type ProducstSize = keyof typeof mapProductSize;
export type ProducstType = keyof typeof mapProductType;
