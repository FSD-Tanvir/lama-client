import Header from "./Header";
import bannerImg from "../../assets/Images/BannerImg.jpg";
import { MdOutlineHome } from "react-icons/md";
import { Link } from "react-router-dom";
import CreateProjectModal from "../../Components/Modals/CreateProjectModal";

const CreateProject = () => {
  return (
    <div>
      <Header />
      <div className="mt-5 max-w-4xl mx-auto">
        <div className="border w-fit px-2 py-1 rounded-full ">
          <Link to={"/"} className="flex items-center gap-1">
            <MdOutlineHome className="text-xl" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className=" text-center ">
          <h1 className="mb-5 text-5xl font-bold text-purple-700 ">
            Create a New Project
          </h1>
          <img src={bannerImg} alt="" className="h-64 mx-auto" />
          <p className="mb-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in dolor molestiae excepturi assumenda, iusto eaque
            sequi ipsa accusamus exercitationem vero
          </p>
          <CreateProjectModal />
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
