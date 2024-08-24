import { useState } from "react";
import { LuClipboardCheck } from "react-icons/lu";
import btn1 from "../../assets/btn-1.png";
import btn2 from "../../assets/btn-2.jpeg";
import "./NewJobs.css";
import { Link } from "react-router-dom";

const NewJobs = () => {
  const [selectedTax, setSelectedTax] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const handleTaxSelection = (taxType) => {
    setSelectedTax(taxType);
  };

  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h1 className="flex justify-center text-[#16005D] text-3xl mt-2 font-sans">
        New Jobs
      </h1>

      <div className="flex justify-center items-center h-44">
        <p className="text-[#16005D] text-xl text-center leading-relaxed">
          Do you need to file your personal taxes or your <br /> business taxes
          2020?
        </p>
      </div>

      <div>
        <div className="flex space-x-3 justify-center">
          <button
            onClick={() => handleTaxSelection("personal")}
            className={`bg-white shadow-xl py-4 px-6 rounded-3xl flex items-center space-x-4 ${
              selectedTax === "personal" ? "bg-[#005EFE] text-white" : ""
            }`}
          >
            <img src={btn1} alt="Personal Taxes" className="w-16 h-10" />
            <span className="text-xl">Personal Taxes</span>
          </button>
          <button
            onClick={() => handleTaxSelection("business")}
            className={`bg-white shadow-xl py-4 px-6 rounded-3xl flex items-center space-x-4 ${
              selectedTax === "business" ? "bg-[#005EFE] text-white" : ""
            }`}
          >
            <img src={btn2} alt="Business Taxes" className="w-10" />
            <span className="text-xl">Business Taxes</span>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center h-40">
        <p className="text-[#16005D] text-lg text-center leading-relaxed">
          Are you planning to file your tax return for any other year apart from
          current <br /> (2020)?
        </p>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {[
          "2020",
          "2019",
          "2018",
          "2017",
          "2016",
          "2015",
          "2014",
          "2013",
          "2012",
          "2011",
        ].map((year) => (
          <button
            key={year}
            onClick={() => handleYearSelection(year)}
            className={`flex justify-center items-center px-3 py-2 hole-button ${
              selectedYear === year ? "active-year" : ""
            }`}
          >
            <LuClipboardCheck /> {year}
          </button>
        ))}
      </div>

      <div className="flex gap-8 items-center h-40">
        <button
          className="bg-[#C5C5C5] shadow-md rounded-2xl px-10 py-2 text-white"
          disabled
        >
          Back
        </button>
        <Link to="/describe-you">
          <button
            className={`shadow-md rounded-2xl px-10 py-2 ${
              selectedTax
                ? "bg-white hover:bg-[#005EFE] hover:text-white"
                : "bg-[#C5C5C5] text-white"
            }`}
            disabled={!selectedTax}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NewJobs;
