import { FaHome, FaPowerOff } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { RiContactsLine } from "react-icons/ri";
import { MdMessage, MdOutlinePayment } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center bg-blue-600 h-screen p-4">
      <div className="mb-8 flex items-center">
        <img className="w-14" src={logo} alt="logo"></img>
        <IoIosMenu className="text-white font-bold text-3xl" />
      </div>
      <nav className="flex flex-col space-y-8">
        <FaHome className="text-[#619BFE] text-xl cursor-pointer" />
        <RiContactsLine className="text-[#619BFE] text-xl cursor-pointer" />
        <MdOutlinePayment className="text-[#619BFE] text-xl cursor-pointer" />
        <CgFileDocument className="text-[#619BFE] text-xl cursor-pointer" />
        <PiSuitcaseSimpleFill className="text-white font-bold text-xl cursor-pointer" />
        <MdMessage className="text-[#619BFE] text-xl cursor-pointer" />
        <FaPowerOff className="text-[#619BFE] text-xl cursor-pointer" />
      </nav>
    </div>
  );
};

export default Navbar;
