export const categories = [
  {
    name: 'Apple',
  },
  {
    name: 'Samsung',
  },
  {
    name: 'Xiaomi',
  },
  {
    name: 'Huawei',
  },
  {
    name: 'Realme ',
  },
];

export const _ingredients = [
  {
    name: 'Сырный бортик',
    price: 179,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
      
  },
  {
    name: 'Сливочная моцарелла',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
  },
  {
    name: 'Сыры чеддер и пармезан',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
  },
  {
    name: 'Острый перец халапеньо',
    price: 59,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
  },
  {
    name: 'Нежный цыпленок',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
  },
  {
    name: 'Шампиньоны',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
  },
  {
    name: 'Ветчина',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
  },
  {
    name: 'Пикантная пепперони',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
  },
  {
    name: 'Острая чоризо',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
  },
  {
    name: 'Маринованные огурчики',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
  },
  {
    name: 'Свежие томаты',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
  },
  {
    name: 'Красный лук',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
  },
  {
    name: 'Сочные ананасы',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
  },
  {
    name: 'Итальянские травы',
    price: 39,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
  },
  {
    name: 'Сладкий перец',
    price: 59,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
  },
  {
    name: 'Кубики брынзы',
    price: 79,
    imageUrl: 'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
  },
  {
    name: 'Митболы',
    price: 79,
    imageUrl:
      'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
  },
].map((obj, index) => ({ id: index + 1, ...obj }));

export const products = [
  {
    name: 'Samsung Galaxy Z Fold 6 121TB Silver Shadow',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/samsung/Samsung%20Galaxy%20Z%20Fold%206%20121TB%20Silver%20Shadow.png',
    categoryId: 2,
  },
  {
    name: 'Samsung Galaxy Z Fold 6 12512GB Pink',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/samsung/Samsung%20Galaxy%20Z%20Fold%206%2012512GB%20Pink.png',
    categoryId: 2,
  },
  {
    name: 'Смартфон Samsung Galaxy S24 Ultra 121TB желтый титан.',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/samsung/%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%20Samsung%20Galaxy%20S24%20Ultra%20121TB%20%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9%20%D1%82%D0%B8%D1%82%D0%B0%D0%BD.png',
    categoryId: 2,
  },
  
  {
    name: 'Смартфон Xiaomi 13 5G 8 256GB Black',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Xiaomi/%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%20Xiaomi%2013%205G%208256GB%20Black.png',
    categoryId: 3,
  },
  {
    name: 'Смартфон Xiaomi 13 5G 12 256GB White',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Xiaomi/%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%20Xiaomi%2013%205G%2012256GB%20White.png',
    categoryId: 3,
  },
  {
    name: 'Смартфон Xiaomi 13 5G 12 256GB Black',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/samsung/%D0%A1%D0%BC%D0%B0%D1%80%D1%82%D1%84%D0%BE%D0%BD%20Samsung%20Galaxy%20S24%20Ultra%20121TB%20%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D0%B9%20%D1%82%D0%B8%D1%82%D0%B0%D0%BD.png',
    categoryId: 3,
  },
  {
    name: 'Huawei Enjoy 20e 6 128GB',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Huawei/Huawei%20Enjoy%2020e%206128GB.png',
    categoryId: 4,
  },
  {
    name: 'Huawei Enjoy 20e 6 128GB Violet',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Huawei/Huawei%20Enjoy%2020e%20664%20GB%20Violet.png',
    categoryId: 4,
  },
  {
    name: 'Huawei Enjoy 20e 6 128GB Violet',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Huawei/Huawei%20Enjoy%2020e%20664%20GB%20Violet.png',
    categoryId: 4,
  },
  {
    name: 'Huawei Enjoy 20e 6 128GB Violet',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Huawei/Huawei%20Enjoy%2020e%20664%20GB%20Violet.png',
    categoryId: 4,
  },
  {
    name: 'Huawei Enjoy 20e 6 128GB Violet',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Huawei/Huawei%20Enjoy%2020e%20664%20GB%20Violet.png',
    categoryId: 4,
  },
  {
    name: 'Realme C31 464GB Silve',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Realme/Realme%20C31%20464GB%20Silver.png',
    categoryId: 5,
  },
  {
    name: 'Realme C31 464GB Silve',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Realme/Realme%20C31%20464GB%20Silver.png',
    categoryId: 5,
  },
  {
    name: 'Realme 6i 4128GB Green',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Realme/Realme%206i%204128GB%20Green.png',
    categoryId: 5,
  },
  {
    name: 'Realme 6S 464GB Eclipse Black',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Realme/Realme%206S%20464GB%20Eclipse%20Black.png',
    categoryId: 5,
  },
  {
    name: 'Realme 6 Pro 8128GB Lightning Red',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Realme/Realme%206%20Pro%208128GB%20Lightning%20Red.png',
    categoryId: 5,
  },
  {
    name: 'Realme 6 8128 Comet Blue',
    imageUrl: 'https://raw.githubusercontent.com/KitSmart-Company/kitsmart-products/refs/heads/main/products/Realme/Realme%206%208128%20Comet%20Blue.png',
    categoryId: 5,
  },
  
];
