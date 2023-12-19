import Header from "./Header";
import bannerImg from "../../assets/Images/BannerImg.jpg";
import { FaPlus } from "react-icons/fa6";

const MyProjects = () => {
  return (
    <div>
      <Header />
      <div className=" mt-16">
        <div className="max-w-2xl mx-auto text-center ">
          <h1 className="mb-5 text-5xl font-bold text-primary-color">
            Create a New Project
          </h1>
          <img src={bannerImg} alt="" className="h-64 mx-auto" />
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in
          </p>
          <button className="btn bg-[#211935]  hover:bg-[#211935] ">
            <FaPlus className="bg-neutral-50 text-3xl rounded-full p-2 " />
            <span className="text-neutral-50">Create New Project</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
