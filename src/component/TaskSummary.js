import React from "react";
import ProgressBar from "./ProgressBar";

const TaskSummary = () => {
  return (
    <div>
      <div className="w-[273px] border border-dashed border-[#9747FF] rounded-[5px] p-5">
        <p className="text-sm font-normal mb-1">Total task</p>
        <p className="font-semibold text-lg">112</p>
        <div className="flex flex-col gap-6 mt-3">
          <ProgressBar title="Completed" number="50" />
          <ProgressBar title="In Progress" number="15" />
          <ProgressBar title="Pending" number="30" />
        </div>
      </div>
    </div>
  );
};

export default TaskSummary;
