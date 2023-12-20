import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import CreateProject from "../Pages/CreateProject/CreateProject";
import MyProjects from "../Pages/MyProjects/MyProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      { path: "/create-project", element: <CreateProject/> },
      { path: "/my-projects", element: <MyProjects/> },
    ],
  },
]);

export default router;
