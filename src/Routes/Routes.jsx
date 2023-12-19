import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import CreateProject from "../Pages/CreateProject/createProject";

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
    ],
  },
]);

export default router;
