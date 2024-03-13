import React, { useState } from "react";
import logo from "../assets/Images/logo.png";
import { menu } from "../assets/constants/menu";
import profileLogo from "../assets/Images/Profile.png";
import  {HiEllipsisVertical} from 'react-icons/hi2';
import HeaderItem from "./HeaderItem";
const Header = () => {
  const [showModel, setShowModel]=useState(false);
  return (
    <div className="flex justify-between p-3 items-center ">
      <div className="flex items-center gap-6">
        <img
          src={logo}
          alt="logo"
          className=" w-[80px] md:w-[115px] object-cover"
        />
        <div className="hidden md:flex items-center gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} Icon={item.icon} name={item.name} />
          ))}
        </div>
        <div className="flex md:hidden items-center gap-4">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} Icon={item.icon} name={""} />
          )}
          <div className="md:hidden" onClick={() => setShowModel(!showModel)}>
            <HeaderItem name={""} Icon={HiEllipsisVertical} />
            {showModel && <div className="absolute mt-4 p-3 px-5 py-4 bg-[#121212] border-[1px] border-gray-700">
              {
                menu.map(
                  (item, index) =>
                    index >2 && (
                      <HeaderItem
                        key={index}
                        Icon={item.icon}
                        name={item.name}
                      />
                    )
                )}
            </div>}
          </div>
        </div>
      </div>

      <div>
        <img
          src={profileLogo}
          alt="profile Logo"
          className="w-[35px] rounded-full border border-red-500"
        />
      </div>
    </div>
  );
};

export default Header;
