import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

const ExpenseChart = () => {
  const data = [
    { date: "Nov 1", expense: 100 },
    { date: "Nov 4", expense: 150 },
    { date: "Nov 8", expense: 200 },
    { date: "Nov 12", expense: 100 },
    { date: "Nov 16", expense: 150 },
    { date: "Nov 24", expense: 200 },
    { date: "Nov 28", expense: 100 },
    { date: "Nov 30", expense: 500 },
  ];
  return (
    <div>
      <div className="bg-white w-[600px] h-[256] py-4 px-2">
        <div className="flex justify-between">
          {" "}
          <div className="mx-14">Day Week Month Year</div>
          <button className="bg-blue-800 rounded px-5 py-2 text-white text-xs font-bold">
            Export Details
          </button>
        </div>

        <div className="mx-14">৳45,000</div>
        <AreaChart width={590} height={250} data={data}>
          <Area dataKey="expense" fill="#1E2772" stroke="blue" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
        </AreaChart>
      </div>
    </div>
  );
};

export default ExpenseChart;
