import React from "react";
import { Title, Header } from "@/shared/components/shared";
import HeroSection from "@/shared/components/shared/hero-sections";
import ProcessSection from "@/shared/components/shared/process-section";
import ResponsibilitiesSection from "@/shared/components/shared/responsibility-card";
import RouteMappingSection from "@/shared/components/shared/route-mapping-section";
import Footer from "@/shared/components/shared/footer";
import WorkAppSection from "@/shared/components/shared/workapp-section";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <div className="max-w-[1250px] m-auto mt-10">
        <HeroSection />
        <Title
          text="Как стать курьером"
          className="font-bold px-3 mt-20 text-center"
          size="xl"
        />
        <ProcessSection />
        <Title
          text="Работа в пункте выдачи"
          className="font-bold text-center px-3 mt-20"
          size="xl"
        />
        <WorkAppSection />
        <ResponsibilitiesSection />
        <RouteMappingSection />
        <div className="w-full h-[280px] rounded-[50px] relative bg-gradient-to-r from-[#4c3aed] via-[#8f4eff] to-[#735aff]">
          <div className="flex justify-center items-center gap-40 p-[38px]">
            <div className="text-center">
              <Title className="text-white font-bold" text="Скачайте приложение WB Курьер" size="lg"/>
              <Title className="text-white font-bold" text="Забрал → Доставил → Заработал" size="sm"/>
            </div>
            <figure>
              <img
              width={180}
              className=" rounded-3xl"
                src="https://sun9-77.userapi.com/impg/Ioy0Q5i7QcrmgfAj2w35YwWuoBcs6vSg6Sd_1w/CPxPIVBQ9cQ.jpg?size=255x240&quality=96&sign=6df6fc7eaba86d9613f4d3e8eec4cc14&type=album"
                alt=""
              />
              <figcaption className="text-white text-[14px] mt-3">Наведите камеру на QR код</figcaption>
            </figure>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};




export default About;
