import React from "react";
interface T {
  type: string;
  content: string;
  onClick: Function;
}

const StyledButton = ({ type, content, onClick }: T) => {
  const bgColor = type === "primary" ? "bg-gray-dark" : "bg-[#FFFFFFA6]";
  const textColor = type === "primary" ? "text-white" : "text-gray";

  return (
    <button
      className={`w-60 h-9 text-sm rounded-md text-center ${bgColor} ${textColor} font-semibold`}
      onClick={() => onClick}
    >
      {content}
    </button>
  );
};

export default StyledButton;
