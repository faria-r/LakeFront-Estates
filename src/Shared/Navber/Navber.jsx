import React from "react";
import { FcMenu } from "react-icons/fc";

const Navber = () => {
  return (
    <div className="absolute top-0 bg-transparent z-10 w-full pt-8">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>HOME SEARCH</a>
              </li>
              <li>
                <a>ABOUT RIEZL</a>
              </li>
              <li>
                <a>PROPERTIES</a>
              </li>
              <li>
                <a>BLOG</a>
              </li>
              <li>
                <a>LET'S CONNECT</a>
              </li>
              <li>
                <a>+88-01970477973</a>
              </li>
            </ul>
          </div>
          <a className="text-white text-xl font-mono lg:ml-16">
            LakeFront Estate
          </a>
        </div>
        <div className="navbar-center  hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-white font-semibold font-mono">
            <li>
              <a>HOME SEARCH</a>
            </li>
            <li>
              <a>ABOUT RIEZL</a>
            </li>
            <li>
              <a>PROPERTIES</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <a>LET'S CONNECT</a>
            </li>
            <li>
              <a>+88-01970477973</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end right-0">
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn bg-transparent border-0 text-2xl "
              >
                <FcMenu className="text-white" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
