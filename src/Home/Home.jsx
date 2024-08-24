import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      {/* Welcome Text */}
      <div className="text-center font-mono text-[#16005D] text-4xl leading-normal">
        <h1>Welcome “Diego”</h1>
        <h1>Let’s get started</h1>
        {/* Curved Line */}
        <div className="flex justify-center">
          <div className="curve-container">
            <div className="curve"></div>
          </div>
        </div>
      </div>

      {/* Description Text */}
      <div className="text-center text-gray-500 text-lg mt-8 max-w-md">
        <p>
          Taxes aren’t your job, they’re ours — so let us take them off your
          hands. We’ll connect you to a network of certified Pros and find the
          one that best fits your needs. Plus, they’ll file for you!
        </p>
      </div>

      {/* Button Section */}
      <Link
        to="/newJobs"
        className="mt-12 bg-white shadow-lg rounded-lg py-4 px-8 w-1/2 flex justify-center gap-12 items-center cursor-pointer"
      >
        <div className="w-16 h-16 bg-[#403A39] rounded-lg box-shadow-3d"></div>
        <div className="curve-container">
          <h1 className="text-[#16005D] text-xl">Create New Jobs</h1>
          <div className="curve"></div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
