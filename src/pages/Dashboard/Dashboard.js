import React from "react";
import ExpenseChart from "../../component/ExpenseChart";
import StatusCard from "../../component/StatusCard";
import TaskSummary from "../../component/TaskSummary";

const Dashboard = () => {
  return (
    <div className="px-10">
      <h1 className="font-bold text-4xl my-14">Dashboard</h1>
      <p className="text-sm font-bold text-[#102048]">Company Status</p>
      <div className="py-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StatusCard title="Total Employee" employee="450" />
        <StatusCard title="Attend Today" employee="420" />
        <StatusCard title="Employees on Leave" employee="15" />
        <StatusCard title="New Expense Request" employee="5" />
      </div>
      <div className=" flex flex-col items-center gap-3  md:flex-row mt-12">
        <ExpenseChart />
        <TaskSummary />
      </div>
    </div>
  );
};

export default Dashboard;
