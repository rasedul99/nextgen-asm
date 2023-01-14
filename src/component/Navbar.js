import React from "react";
import { Link } from "react-router-dom";
import arrowdown from "../Assets/arrow-down.png";
import greatSix from "../Assets/GearSix.png";
import navbarImg from "../Assets/navbar.png";

const Navbar = () => {
  const menuItems = [
    {
      img: navbarImg,
      title: "DashBoard",
    },
    {
      img: navbarImg,
      title: "Attendance",
    },
    {
      img: navbarImg,
      title: "EMployees",
    },
    {
      img: navbarImg,
      title: "Leaves",
    },
    {
      img: navbarImg,
      title: "Expense",
    },
    {
      img: navbarImg,
      title: "Notice",
    },
    {
      img: navbarImg,
      title: "Department",
    },
  ];
  return (
    <div className=" bg-[#1E2772]  text-white p-5 ">
      <h3>TEAM 360°</h3>
      <div className="flex flex-col gap-5 p-8 font-semibold text-lg ">
        {menuItems.map((item) => {
          return (
            <Link to={item.title} className="flex flex-row gap-3 shirnk">
              <img src={item.img} />
              <div className="hidden md:flex shrink">{item.title}</div>
            </Link>
          );
        })}
      </div>
      <div>
        <div className="flex  items-center gap-3 my-3 font-semibold text-lg">
          {" "}
          <img src={arrowdown} className="w-2 h-4 " />
          <img src={greatSix} />
          <div>Settings</div>
        </div>

        <ul className="ml-16 flex flex-col gap-3 font-normal text-base ">
          <li>. Approval</li>
          <li>. Leave</li>
          <li>. Office Setting</li>
          <li>. My Subscriptions</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
