import { useState } from "react";
// Icons
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import MenuItem from "./MenuItem";
import siteName from "../../assets/Images/LAMA.png";
import siteLogo from "../../assets/Images/Logo.png";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className=" flex justify-between md:hidden">
        <div>
          <div className=" flex items-center cursor-pointer p-4 font-bold">
            <img src={siteLogo} alt="Logo" />
            <img src={siteName} alt="Lama" />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-purple-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#F3E8FF] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 rounded-lg  items-center cursor-pointer   ">
              <img src={siteLogo} alt="Logo" />
              <img src={siteName} alt="Lama" />
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-1">
            <nav>
              <MenuItem label="Projects" address="/" />
              <MenuItem label="Widget Configurations" address="/" />
              <MenuItem label="Deployment" address="/" />
              <MenuItem label="Pricing" address="/" />
            </nav>
          </div>
        </div>
        

        <div>
        <hr  size="5" className="text-blue"/>
          <MenuItem icon={FcSettings} label="Setting" address="/" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
