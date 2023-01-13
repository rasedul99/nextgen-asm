import React from "react";

const ProgressBar = ({ title, number }) => {
  return (
    <div>
      <div className="mb-1">{title}</div>
      <div className="w-[163px] h-[28px] bg-[#ded7d780] rounded-lg relative">
        <div
          className="bg-[#C6C7F8] h-full rounded-tl-lg rounded-bl-lg absolute"
          style={{ width: `${number}%` }}
        ></div>
        <div className="text-end pr-1">{number}/100</div>
      </div>
    </div>
  );
};

export default ProgressBar;
