import { Title } from "./title";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  title,
  description,
}) => {
  return (
    <div>
      <h1 className="w-[70px] h-[70px] mb-3 flex justify-center items-center bg-[#864BFD] rounded-full text-center text-white text-4xl font-bold">
        {step}
      </h1>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-[14px] text-gray-500">{description}</p>
    </div>
  );
};

const getStepDescription = (step: string): string => {
  switch (step) {
    case "Скачать приложение":
      return "Скачайте приложение в App Store или Google Play по ссылке ниже и запустите его";
    case "Заполнить анкету":
      return "Введите свой номер и подтвердите его с помощью смс. Заполните анкету";
    case "Получить приглашение":
      return "Получите приглашение и приступайте к выполнению работ";
    default:
      return "";
  }
};
const ProcessSection: React.FC = () => {
  return (
    <div className="bg-[#F3F4F6] rounded-2xl p-10">
      <Title text="Просто и быстро!" className="font-bold mb-10" size="xl" />
      <div className="grid grid-cols-3 gap-3">
        {["Скачать приложение", "Заполнить анкету", "Получить приглашение"].map(
          (step, index) => (
            <ProcessStep
              key={index}
              step={index + 1}
              title={step}
              description={getStepDescription(step)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProcessSection;
