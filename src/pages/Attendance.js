import React from "react";
import calender from "../Assets/calender.png";
import setting from "../Assets/setting.png";

const Attendance = () => {
  return (
    <div className="px-10">
      <div className="flex justify-between my-20">
        <div>
          <h1 className="font-bold text-4xl">Dashboard</h1>
        </div>
        <div className="flex ml-10 gap-12">
          <button className="bg-blue-800 rounded px-5 py-2 text-white text-xs font-bold">
            Download Report
          </button>
          <img src={setting} className="w-10 h-[38px]" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="flex items-center  py-6 px-5 bg-white border border-[#00000033] rounded-lg w-[252px]">
          <input placeholder="Date" className="outline-transparent " />
          <img src={calender} className="w-6 h-6 " />
        </div>

        <div className="flex items-center  py-6 px-5 bg-white border border-[#00000033] rounded-lg w-[252px]">
          <input
            placeholder="Department"
            className="outline-transparent text-[#555555] font-normal text-base"
          />
        </div>

        <div className="flex items-center  py-6 px-5 bg-white border border-[#00000033] rounded-lg w-[252px]">
          <select
            id="selectbox1"
            className="outline-transparent w-full text-[#555555] font-normal text-base"
          >
            <option value="">Attendance</option>
            <option value="demo">Demo</option>
            <option value="demo">Demo</option>
          </select>
        </div>

        <div className="flex items-center  py-6 px-5 bg-white border border-[#00000033] rounded-lg w-[252px]">
          <select
            id="selectbox1"
            className="outline-transparent w-full text-[#555555] font-normal text-base"
          >
            <option value="">Present</option>
            <option value="demo">Demo</option>
            <option value="demo">Demo</option>
          </select>
        </div>

        <div className="flex items-center  py-6 px-5 bg-white border border-[#00000033] rounded-lg w-[252px]">
          <input
            placeholder="Check In"
            className="outline-transparent text-[#555555] font-normal text-base"
          />
        </div>

        <div className="flex items-center  py-6 px-5 bg-white border border-[#00000033] rounded-lg w-[252px]">
          <input
            placeholder="Location"
            className="outline-transparent text-[#555555] font-normal text-base"
          />
        </div>

        <div className="flex items-center  py-6 px-5 bg-white border border-[#00000033] rounded-lg w-[252px]">
          <select
            id="selectbox1"
            className="outline-transparent w-full text-[#555555] font-normal text-base"
          >
            <option value="">Designation</option>
            <option value="demo">Demo</option>
            <option value="demo">Demo</option>
          </select>
        </div>

        <div className="flex items-center py-6 px-5 bg-white border border-[#00000033] rounded-lg w-[252px]">
          <select
            id="selectbox1"
            className="outline-transparent w-full text-[#555555] font-normal text-base "
          >
            <option value="">Department</option>
            <option value="demo">Demo</option>
            <option value="demo">Demo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
