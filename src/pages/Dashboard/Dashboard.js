import React from "react";
import StatusCard from "../../component/StatusCard";

const Dashboard = () => {
  return (
    <div className="px-10">
      <h1 className="font-bold text-4xl my-14">Dashboard</h1>
      <p className="text-sm font-bold text-[#102048]">Company Status</p>
      <div className="py-5 grid grid-cols-4">
        <StatusCard />
        <StatusCard />
        <StatusCard />
        <StatusCard />
      </div>
    </div>
  );
};

export default Dashboard;
