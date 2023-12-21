import { Link } from "react-router-dom";
import Header from "../../Components/Shared/Header";
import { MdOutlineHome } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    createdAt: 1702990691254,
    episodes: [],
    projectName: "web development",
    user: {},
  },
  {
    id: 2,
    createdAt: 1702990691254,
    episodes: [],
    projectName: "data science",
    user: {},
  },
  {
    id: 3,
    createdAt: 1702990691254,
    episodes: [],
    projectName: "app development",
    user: {},
  },
  {
    id: 4,
    createdAt: 1702990691254,
    episodes: [],
    projectName: "graphic design",
    user: {},
  },
];

const MyProjects = () => {
  return (
    <div>
      <Header />
      <div className="mt-5 max-w-5xl mx-auto px-1">
        <div className="border w-fit px-2 py-1 rounded-full ">
          <Link to={"/"} className="flex items-center gap-1">
            <MdOutlineHome className="text-xl" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className=" my-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
            <h2 className="text-purple-700 text-4xl font-bold">Projects</h2>
            <Link to={"/create-project"}>
              <button className="btn   bg-[#211935]  hover:bg-[#211935] ">
                <FaPlus className="bg-white text-xl rounded-full p-1 " />
                <span className="text-white">Create New Project</span>
              </button>
            </Link>
          </div>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-2">
            {/* cards */}
            {projects
              ? projects.map((project) => {
                  const wordsArray = project.projectName.split(" ");
                  const result = wordsArray
                    .slice(0, 2)
                    .map((word) => word.charAt(0))
                    .join("");

                  const creationDate = new Date(project.createdAt);
                  const formattedCreationDate =
                    creationDate.toLocaleDateString();

                  return (
                    <Link to={`/my-project/${project.id}`} key={project.id}>
                      <div className="border max-w-sm rounded-lg overflow-hidden ">
                        <div className="m-2 flex gap-5 items-center justify">
                          <div className="bg-purple-700 uppercase rounded-lg text-6xl font-semibold p-2 text-white">
                            <div className="w-24 flex items-center justify-center ">
                              {result}
                            </div>
                          </div>
                          <div className="flex flex-col ">
                            <h3 className="text-purple-700 sm:text-xl font-bold capitalize whitespace-nowrap">
                              {project.projectName}
                            </h3>
                            <p className="mb-3">
                              {project.episodes.length} Episodes
                            </p>
                            <p className="text-gray-500 ">
                              Created at {formattedCreationDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
