import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { IoBook } from "react-icons/io5";
import {
  FaCloudSun,
  FaUtensils,
  FaNewspaper,
  FaTasks,
  FaSignInAlt,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import { UserInfoContext } from "../../custom/Custom";

const NavBer = () => {
  const { userData, logOut } = useContext(UserInfoContext);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();
  useEffect(() => {
    setActiveLink(location.pathname || "/");
  }, [location.pathname]);

  const navItems = [
    { path: "/", icon: <CiHome />, label: "Home" },
    { path: "/Weather", icon: <FaCloudSun />, label: "Weather" },
    { path: "/Recipes", icon: <FaUtensils />, label: "Recipes" },
    { path: "/News", icon: <FaNewspaper />, label: "News" },
    { path: "/ToDo", icon: <FaTasks />, label: "To-Do" },
    { path: "/BioData", icon: <IoBook />, label: "BioData" },
  ];

  return (
    <header className="bg-black py-2 sticky top-0 z-50 shadow">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setActiveLink("/")}
          className="text-white text-xl font-bold"
        >
          <abbr title="Home">
            <img
              src="https://i.postimg.cc/wjnk9tnF/logo.png"
              alt="logo"
              className="w-[100px] bg-white p-2 rounded-md"
            />
          </abbr>
        </Link>

        {/* Menu Items */}
        <ul className="hidden lg:flex gap-6 text-white font-medium items-center">
          {navItems.map((item) => (
            <li
              key={item.path}
              className={
                activeLink === item.path
                  ? "text-red-500"
                  : "hover:text-green-400"
              }
            >
              <Link
                to={item.path}
                className="flex items-center gap-1"
                onClick={() => setActiveLink(item.path)}
              >
                {item.icon} {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Info */}
        <div className="hidden lg:flex items-center gap-2">
          {userData?.name && (
            <p className="border rounded-full text-white px-2 uppercase bg-green-600 font-bold">
              {userData.name.charAt(0)}
            </p>
          )}
          {userData?.profilePicture && (
            <div>
              <img
                src={userData.profilePicture}
                alt="Profile"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            </div>
          )}

          {userData ? (
            <button
              onClick={logOut}
              className="btn btn-sm btn-error flex items-center gap-1"
            >
              <FaSignOutAlt /> Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm btn-primary flex items-center gap-1"
            >
              <FaSignInAlt /> Login
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        <div className="lg:hidden dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle">
            <FaBars className="text-white text-xl" />
          </button>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow rounded-box w-52 bg-black text-white"
          >
            {navItems.map((item) => (
              <li
                key={item.path}
                className={
                  activeLink === item.path
                    ? "text-red-500"
                    : "hover:text-green-400"
                }
              >
                <Link to={item.path} onClick={() => setActiveLink(item.path)}>
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}

            <li className="border-t mt-2 pt-2">
              {userData ? (
                <button onClick={logOut} className="flex items-center gap-2">
                  <FaSignOutAlt /> Logout
                </button>
              ) : (
                <Link to="/login">
                  <FaSignInAlt /> Login
                </Link>
              )}
            </li>

            {userData?.name && (
              <li className="flex items-center gap-2 mt-2">
                {userData?.profilePicture && (
                  <img
                    src={userData.profilePicture}
                    alt="Profile"
                    className="rounded-full border-2 border-white"
                  />
                )}
                <span className="text-white font-bold uppercase">
                  {userData.name}
                </span>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBer;
