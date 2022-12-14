import React from "react";
import StyledButton from "./UI/StyledButton";

interface T {
  id: number;
  name: string;
  subText: string | null;
  image: string;
  shopNow: boolean | undefined;
}

const HomeItem = ({ id, name, subText, image, shopNow }: T) => {
  return (
    <div className="h-[100vh]" key={id}>


      <div className="absolute -z-10 h-[95vh] w-full">
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

        <div className="flex justify-center gap-6 mx-4 max-[540px]:column">
          {shopNow ? (
            <StyledButton
              content="Shop Now"
              type="primary"
              onClick={() => console.log("button pressed")}
            />
          ) : (
            <>
              <StyledButton
                content="Custom Order"
                type="primary"
                onClick={() => console.log("button pressed")}
              />
              <StyledButton
                content="Existing Inventory"
                type="secondary"
                onClick={() => console.log("button pressed")}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
