import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
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
      { path: "/my-projects", element: <MyProjects /> },
    ],
  },
]);

export default router;
