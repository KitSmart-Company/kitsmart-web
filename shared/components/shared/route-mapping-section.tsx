interface RouteMappingCardProps {
  image: string;
  title: string;
  description: string;
}

const RouteMappingCard: React.FC<RouteMappingCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <figure>
      <img src={image} alt={title} className="rounded-lg" />
      <figcaption>
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </figcaption>
    </figure>
  );
};

const routeMappingData = [
  {
    image: "https://static-basket-01.wb.ru/vol0/services/5873/1948757857.webp",
    title: "Составляйте свой маршрут",
    description:
      "Берите заказы из ПВЗ в шаговой доступности и находите задания по пути",
  },
  {
    image: "https://static-basket-01.wb.ru/vol0/services/5873/1948757856.webp",
    title: "Составляйте свой маршрут",
    description:
      "Берите заказы из ПВЗ в шаговой доступности и находите задания по пути",
  },
  {
    image: "https://static-basket-01.wb.ru/vol0/services/5873/1948757855.webp",
    title: "Составляйте свой маршрут",
    description:
      "Берите заказы из ПВЗ в шаговой доступности и находите задания по пути",
  },
];

const RouteMappingSection: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-10">
      {routeMappingData.map((item, index) => (
        <RouteMappingCard
          key={index}
          image={item.image}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default RouteMappingSection;
