import React from "react";

interface T {
  id: number;
  name: string;
  subText: string;
  image: string;
}

const HomeItem = ({ name, subText, image }: T) => {
  return (
    <div className="h-[100vh]">
      <div className="absolute -z-10 h-[95vh] w-screen">
        <img src={image} alt={name} className="w-full h-[100vh] object-cover" />
      </div>
      <div className="h-[86%] flex flex-col justify-between items-center pt-28">
        <div className="flex flex-col">
          <h1 className="text-4xl font-semibold text-[#222]">{name}</h1>
          <p
            className="underline font-normal pt-2 text-gray cursor-pointer
          text-sm"
          >
            {subText}
          </p>
        </div>

        <div className="sm:flex justify-center gap-6">
          <button className="w-60 h-9 text-sm rounded-md text-center bg-gray-dark text-white font-semibold">
            Custom Order
          </button>
          <button className="w-60 h-9 text-sm rounded-md text-center bg-[#FFFFFFA6] text-gray font-semibold">
            Existing Inventory
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
