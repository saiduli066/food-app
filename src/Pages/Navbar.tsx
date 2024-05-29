import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import useAuth from "@/firebase/useAuth";

const Navbar = () => {
  const { logOut,user } = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(false);
const [activeLink, setActiveLink] = useState("");

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = (route:string) => {
    setActiveLink(route);
    setIsNavOpen(false); 
  };

  return (
    <div className="flex justify-between items-center m-3">
      <div className="flex gap-3 items-center">
        <div className="lg:hidden relative z-[100]">
          <button
            onClick={toggleNavbar}
            className="text-gray-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-[#EA3F30]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
          <div
            className={`lg:flex  flex-col absolute ease-in bg-[#ea3f30bb] rounded-md px-3 py-2 text-white ${
              isNavOpen ? "block" : "hidden"
            }`}
          >
            <NavLink
              to="/"
              onClick={() => handleNavLinkClick("Home")}
              className={`${
                activeLink === "Home" ? "px-1 bg-white text-black rounded" : ""
              } `}
            >
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              onClick={() => handleNavLinkClick("Dashboard")}
              className={`${
                activeLink === "Dashboard"
                  ? "px-1 bg-white text-black rounded"
                  : ""
              } `}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/all-supply"
              onClick={() => handleNavLinkClick("All Supplies")}
              className={`${
                activeLink === "All Supplies"
                  ? "px-1 bg-white text-black rounded"
                  : ""
              } `}
            >
              All Supplies
            </NavLink>
          </div>
        </div>
        <h1 className="text-xl lg:text-3xl font-semibold">
          <span className="text-[#EA3F30]">F</span>
          <span className="text-[#FFC374]">o</span>
          <span className="text-[#FFC374]">o</span>
          <span className="text-[#EA3F30]">d</span>{" "}
          <span className="text-[#EA3F30]">N</span>exu
          <span className="text-[#EA3F30]">s</span>
        </h1>
      </div>
      <div className="hidden lg:flex space-x-10 text-[16px] text-gray-500 font-[500] ">
        <NavLink
          to="/"
          onClick={() => handleNavLinkClick("Home")}
          className={`${activeLink === "Home" ? "text-[#EA3F30]" : ""} `}
        >
          Home
        </NavLink>
        <NavLink
          to="/dashboard"
          onClick={() => handleNavLinkClick("Dashboard")}
          className={`${activeLink === "Dashboard" ? "text-[#EA3F30]" : ""} `}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/supplies"
          onClick={() => handleNavLinkClick("All Supplies")}
          className={`${
            activeLink === "All Supplies" ? "text-[#EA3F30]" : ""
          } `}
        >
          All Supplies
        </NavLink>
      </div>

      <div>{user?
                  <Button onClick={logOut} className="btn hover:bg-[#db3f31] ">Logout</Button>
:<Link to="/login">
          <Button className="btn hover:bg-[#db3f31] ">Login</Button>
        </Link>}
      </div>
    </div>
  );
};

export default Navbar;
