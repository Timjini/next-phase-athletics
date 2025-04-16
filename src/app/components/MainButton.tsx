import React from "react";
import { MainButtonProps } from "../types/common";

const MainButton: React.FC<MainButtonProps> = ({ title, onClick }) => {
  return (
    <>
      <button className="actionBtn w-72 mx-auto" onClick={onClick}>
        <span className="font-bold text-gray-500 capitalize">{title}</span>
      </button>
    </>
  );
};

export default MainButton;