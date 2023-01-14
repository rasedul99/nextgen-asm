import React from "react";
import multiperson from "../Assets/mutiperson.png";
import usergroup from "../Assets/usergroup.png";

const StatusCard = ({ title, employee }) => {
  return (
    <div className="bg-white rounded-[10px]  h-64 p-5">
      <div className="flex items-center gap-3 ">
        <img src={multiperson} className="w-3 h-3 text-xs font-medium" />
        <p className="font-medium text-xs text-[#A5A5A5]">{title}</p>
      </div>
      <div className="flex justify-between items-center my-5">
        <h3 className="font-bold text-4xl">{employee}</h3>
        <button className="bg-blue-800 rounded px-5 py-2 text-white text-xs font-bold">
          View All
        </button>
      </div>
      <hr class="border-1 border-slate-200 my-10" />
      <img src={usergroup} />
    </div>
  );
};

export default StatusCard;
