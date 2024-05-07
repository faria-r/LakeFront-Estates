import React, { useContext } from "react";
import { FcMenu } from "react-icons/fc";
import DropdownContent from "../../Components/DropdownContent/DropdownContent";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => [
    logOut()
      .then(() => {})
      .catch((e) => console.log(e)),
  ];
  return (
    <div className="absolute top-0 bg-transparent hover:bg-sky-950 z-10 w-full pt-8 ">
      <div className="navbar" data-aos="fade-down"
    data-aos-duration="3000">

        <div className="navbar-start">
          <Link to="/" className="text-white text-xl font-mono lg:ml-8 ">
            <img src={logo} className="w-[30vw] lg:w-[10vw]" alt="" />
          </Link>
        </div>
        <div className="navbar-center  hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-white font-semibold opacity-[.7] font-mono">
         <DropdownContent></DropdownContent>
            <div className="dropdown dropdown-hover">
              <li>
                <a>ABOUT FARIA</a>
              </li>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow uppercase   bg-black   w-[20vw] text-white text-xl"
              >
                <li>
                  <a>Meet Faria</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <li>
                <a>PROPERTIES</a>
              </li>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow uppercase   bg-black   w-[25vw] text-white text-xl"
              >
                <Link to="/featuredHomes">
                  {" "}
                  <li>
                    <a>Featured properties</a>
                  </li>
                </Link>

                <li>
                  <a>past transaction</a>
                </li>
                <li>
                  <a>property videos</a>
                </li>
              </ul>
            </div>
            <li>
              <a>BLOG</a>
            </li>
            <Link to='/contact'>
            <li>
              <a>LET'S CONNECT</a>
            </li></Link>
          <Link to='/dashboard'>  <li>
              <a>DASHBOARD</a>
            </li></Link>
            {user ? (
              <li>
                {" "}
                <a
                  onClick={handleLogOut}
                  className="btn -mt-2 bg-transparent border-none text-white"
                >
                  LogOut
                </a>
              </li>
            ) : (
              <Link to="/login">
                <li>
                  <a>Login</a>
                </li>
              </Link>
            )}
            {user && (
              <div className="avatar online">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                  {/* <p>{user?.displayName}n</p> */}
                </div>
              </div>
            )}
          </ul>
        </div>
        <div className="navbar-end right-0 ">
          <div className="drawer  drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn bg-transparent border-0 text-2xl "
              >
                <FcMenu className="text-white" />
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 min-h-full bg-sky-950  lg:w-[30vw]  text-white">
                {/* Sidebar content here */}
                <div className="mb-6">
                  <Link
                    to="/"
                    className="text-white text-xl font-mono lg:ml-8 "
                  >
                    <img src={logo} className="w-[20vw] lg:w-[12vw]" alt="" />
                  </Link>
                </div>
                <details className="dropdown dropdown-hover w-auto">
                  <summary>
                  <DropdownContent></DropdownContent>
                  </summary>
              
                </details>
                <details className="dropdown dropdown-hover">
                  <summary className="m-1">
                    {" "}
                    <li>
                      <a>ABOUT FARIA</a>
                    </li>
                  </summary>
                  <ul className="dropdown-content z-[1] menu p-2 shadow uppercase   bg-white  w-auto text-gray-500">
                    <li>
                      <a>Meet Faria</a>
                    </li>
                    <li>
                      <a>Testimonials</a>
                    </li>
                  </ul>
                </details>
                <details className="dropdown dropdown-hover">
                  <summary className="m-1 uppercase">
                    {" "}
                    <li>
                      <a>properties</a>
                    </li>
                  </summary>
                  <ul className="dropdown-content z-[1] menu p-2 shadow uppercase   bg-white  w-auto text-gray-500">
                    <li>
                      <a>Featured properties</a>
                    </li>
                    <li>
                      <a>past transaction</a>
                    </li>
                    <li>
                      <a>property videos</a>
                    </li>
                  </ul>
                </details>
                <li>
                  <a>BLOG</a>
                </li>
                <Link to='/contact'>
            <li>
              <a>LET'S CONNECT</a>
            </li></Link>
            <Link to='/dashboard'>  <li>
              <a>DASHBOARD</a>
            </li></Link>
                {user ? (
              <li>
                {" "}
                <a
                  onClick={handleLogOut}
                  className="btn bg-transparent border-white w-24 ml-4 my-2 text-white"
                >
                  LogOut
                </a>
              </li>
            ) : (
              <Link to="/login">
                <li>
                  <a>Login</a>
                </li>
              </Link>
            )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
