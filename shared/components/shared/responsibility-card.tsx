const ResponsibilitiesSection: React.FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-20">
      <div className="col-span-2">
        <ResponsibilityCard
          title="Что нужно делать"
          description="Выдача товара курьерам и клиентам. Прием и распределение товаров на пункте выдачи заказов. Ведение базы во внутренней системе."
        />
      </div>
      <div className="row-start-2">
        <ResponsibilityCard
          title="Что мы ожидаем"
          description="Знание ПК на уровне пользователя. Приветствуется опыт работы на складе, либо продавцом-консультантом. Аккуратность, ответственность, исполнительность."
        />
      </div>
      <div className="row-start-2">
        <ResponsibilityCard
          title="Что мы предлагаем"
          description="Знание ПК на уровне пользователя. Приветствуется опыт работы на складе, либо продавцом-консультантом. Аккуратность, ответственность, исполнительность."
        />
      </div>
    </div>
  );
};
const ResponsibilityCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="bg-[#F3F4F6] shadow-inner p-10 rounded-3xl">
      <h3 className="font-bold  text-lg mb-3">{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default ResponsibilitiesSection;
