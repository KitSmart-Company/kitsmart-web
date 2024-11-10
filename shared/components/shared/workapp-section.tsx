const WorkAppSection: React.FC = () => {
    return (
      <div className="w-full h-[200px] rounded-[50px] relative bg-gradient-to-r  from-[#4c3aed] via-[#8f4eff] to-[#735aff]">
        <div className="flex justify-between items-center p-[55px] ">
          <h1 className="w-[700px] text-white text-4xl font-bold">
            Скачайте приложение для работы в пункте выдачи заказов
          </h1>
          <div className="flex justify-center gap-3 items-center">
            <img
              className="rounded-2xl"
              src="https://sun9-80.userapi.com/impg/lxJ9ElWvgy4EOV8X5sX1nOF2megrZrkjfnwdTw/nxA9GtNgmIc.jpg?size=202x66&quality=96&sign=024372f531ab852bcbe1255e05c89750&type=album"
              alt="App Store"
            />
            <img
              className="rounded-2xl"
              src="https://sun9-10.userapi.com/impg/jWSxl4hGkIqTXyxpXGV1DD93Jkf7odCp7-vlJg/bLig9Wm0TnM.jpg?size=203x66&quality=96&sign=766684f07e6d76a4964bb2629812f9ff&type=album"
              alt="Google Play"
            />
          </div>
        </div>
      </div>
    );
  };

  export default WorkAppSection