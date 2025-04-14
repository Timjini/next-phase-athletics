import React from "react";
import { MainButtonProps } from "../types/common";

const MainButton: React.FC<MainButtonProps> = ({ title, onClick }) => {
  return (
    <button
      className="mainBtn bg-[#0C1920] text-[#0066CC] cursor-pointer border border-[#002366] rounded px-8 py-3 mt-5 transition duration-200 hover:bg-[#0066CC] hover:text-[#ffd700]"
      onClick={onClick}
    >
      <span className="capitalize font-bold">{title}</span>
    </button>
  );
};

export default MainButton;
