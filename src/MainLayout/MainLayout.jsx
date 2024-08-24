import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Navbar on the left */}
      <Navbar />

      {/* Content on the right */}
      <div className="flex-1 p-10 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
