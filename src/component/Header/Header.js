import React from "react";
import group from "../../Assets/Group.png";
import search from "../../Assets/search .png";
import user from "../../Assets/user.png";
import vector from "../../Assets/Vector.png";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center  w-11/12 mx-auto  h-20">
        <div className="border border-gray-400 rounded px-2 w-1/3">
          <img src={search} className="inline w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="SEARCH"
            className="text-xs font-normal ml-1 my-2 p-1 outline-transparent"
          />
        </div>
        <div className="flex gap-8 items-center">
          <img src={vector} className="w-5 h-5" />
          <img src={group} className="w-4 h-5" />
          <img src={user} className="w-14 h-14 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Header;
