import React from "react";

const HeaderItem = ({ Icon, name }) => {
  return (
    <div
      className="text-white flex items-center gap-3 
    text-[16px] font-semibold cursor-pointer hover:underline 
    underline-offset-4 mb-2"
    >
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
};

export default HeaderItem;
