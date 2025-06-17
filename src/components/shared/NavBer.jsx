import React, { useEffect, useState } from "react";
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
} from "react-icons/fa";

const NavBer = () => {
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

        {/* Login */}
        <div className="hidden lg:block">
          <Link
            to="/login"
            className="btn btn-sm btn-primary flex items-center gap-1"
          >
            <FaSignInAlt /> Login
          </Link>
        </div>

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
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBer;
