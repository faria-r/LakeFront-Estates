import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navber from "../../Shared/Navber/Navber";
import { FaHome } from "react-icons/fa";
import { AiFillHome, AiTwotoneSchedule } from "react-icons/ai";
import { FaHouse } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { BsFillHouseAddFill } from "react-icons/bs";
import useAdmin from "../../Hooks/useAdmin";

const DashBoard = () => {
  const [isAdmin]= useAdmin();
  return (
    <div className="w-auto min-h-[100vh] bg-sky-950 ">
      <div className="">
        <Navber></Navber>
      </div>
      <div className="flex text-white">
        {/* sidebar content */}
        <div className="w-64 min-h-[100vh] bg-sky-950 mt-28">
          <ul className="menu p-4">
            {isAdmin ? (
              <>
                <li className="rounded-none  text-white text-xl">
                  {" "}
                  <Link to="/dashboard/homes">
                    <FaHouse></FaHouse> Home's
                  </Link>
                </li>
                <li className="rounded-none  text-white text-xl">
                  {" "}
                  <Link to="/dashboard/users">
                    <ImUsers /> User's
                  </Link>
                </li>
                <li className="rounded-none  text-white text-xl">
                  {" "}
                  <Link to="/dashboard/homes">
                    <MdOutlineBookmarkAdded /> Booking's
                  </Link>
                </li>
                <li className="rounded-none  text-white text-xl">
                  {" "}
                  <Link to="/dashboard/homes">
                    <AiTwotoneSchedule /> Schedule's
                  </Link>
                </li>
                <li className="rounded-none  text-white text-xl">
                  {" "}
                  <Link to="/dashboard/homes">
                  <BsFillHouseAddFill /> Add Home
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="flex mt-28 bg-white w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
