import React from "react";

const TextInput = ({ title, icon, ...otherProp }: any) => {
  return (
    <>
      <div className="flex items-center gap-2 text-gray py-2">
        <label htmlFor={title} className="text-[#7e8082] font-bold text-sm">
          {title}
        </label>
        <div>{icon}</div>
      </div>
      <input {...otherProp} />
    </>
  );
};

export default TextInput;
