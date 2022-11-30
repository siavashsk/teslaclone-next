import React from "react";

const HomeItem = () => {
  return (
    <>
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <img
          src="/model3.jfif"
          alt="model3"
          className="w-full h-[100vh] object-cover"
        />
      </div>
      <div className="flex justify-center items-center flex-col pt-28">
        <h1 className="text-4xl font-semibold">Model 3</h1>
        <p
          className="underline font-normal pt-2 text-gray
          text-sm"
        >
          Schedule a Test Drive
        </p>

        <div className="absolute bottom-28">
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
    </>
  );
};

export default HomeItem;
