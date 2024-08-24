import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import NewJobs from "../Components/NewJobs/NewJobs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/newJobs",
        element: <NewJobs></NewJobs>,
      },
    ],
  },
]);

export default Router;
