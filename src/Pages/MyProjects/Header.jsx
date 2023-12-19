import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import siteName from "../../assets/Images/LAMA.png";
import siteLogo from "../../assets/Images/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar flex justify-between">
        <div className="flex items-center">
          <img src={siteLogo} alt="Logo" />
          <img src={siteName} alt="Lama." />
        </div>
        <div className=" space-x-3 ">
          <Link className="text-3xl ">
            <IoSettingsOutline />
          </Link>
          <Link className="text-3xl">
            <IoMdNotificationsOutline />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
