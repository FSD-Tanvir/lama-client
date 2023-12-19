import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import siteName from "../../assets/Images/LAMA.png";
import siteLogo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                to={"/create-project"}
                className="text-purple-700 font-semibold"
              >
                Create Project
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img src={siteLogo} alt="Logo" />
          <img src={siteName} alt="Lama." />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to={"/create-project"}
              className="text-purple-700 font-semibold"
            >
              Create Project
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-3 text-3xl">
        <IoSettingsOutline />
        <IoMdNotificationsOutline />
      </div>
    </div>
  );
};

export default Navbar;
