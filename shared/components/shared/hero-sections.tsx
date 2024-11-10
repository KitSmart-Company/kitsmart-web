import Image from "next/image";
import App from "@/public/assets/images/app.png";

const HeroSection: React.FC = () => {
    return (
      <div className="w-full h-[400px] rounded-[50px] relative bg-gradient-to-r from-[#4c3aed] via-[#8f4eff] to-[#735aff]">
        <div className="p-[38px]">
          <h1 className="w-[600px] text-white text-5xl font-bold">
            Приглашаем на работу сотрудников
          </h1>
          <Image className="w-[500px] absolute right-0 top-[-3rem]" src={App} alt="" />
          <div className="w-fit h-fit mt-10 grid grid-cols-2 grid-rows-1 gap-4">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <button
                  key={index}
                  className="bg-[#f0e1ff] transition-all hover:bg-[#f8f2ff] p-3 w-[15rem] text-[14px] rounded-xl font-bold"
                >
                  В сервис доставки
                </button>
              ))}
          </div>
        </div>
      </div>
    );
  };

  export default HeroSection