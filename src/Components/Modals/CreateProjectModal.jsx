/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
const CreateProjectModal = () => {
  const [isEmpty, setIsEmpty] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    const projectName = e.target.projectName.value || null;
    if (projectName === null) {
      setIsEmpty(true);
    } else {
      const user = {};
      const episodes = [];
      const createdAt = Date.now();
      const project = {
        projectName,
        user,
        episodes,
        createdAt,
      };
      console.log(project);
      setIsEmpty(false);
    }
  };

  return (
    <div>
      <button
        className="btn bg-[#211935]  hover:bg-[#211935] "
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <FaPlus className="bg-white text-3xl rounded-full p-2 " />
        <span className="text-white">Create New Project</span>
      </button>

      <dialog id="my_modal_5" className="modal modal-middle">
        <form onSubmit={handleCreate} className="modal-box text-left">
          <h3 className="font-bold text-lg">Create Project</h3>

          <div className="w-full space-y-3 mt-5">
            <div className="">
              <span className="label-text">Enter Project Name:</span>
            </div>
            <input
              name="projectName"
              type="text"
              placeholder="Type here"
              className="w-full border rounded p-2"
            />
            {isEmpty && (
              <small className="text-red-500">
                Project Name can't be empty
              </small>
            )}
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="text-red-500 hover:bg-gray-200 rounded px-2 py-1">
                Cancel
              </button>
            </form>
            <button
              type="submit"
              className="bg-purple-700 text-white hover:bg-purple-500 rounded px-2 py-1"
            >
              Create
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default CreateProjectModal;
