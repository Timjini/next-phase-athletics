import React from "react";
import { MainButtonProps } from "../types/common";

const MainButton: React.FC<MainButtonProps> = ({ title, onClick }) => {
  return (
    <>
      <button className="actionBtn w-72 mx-auto" onClick={onClick}>
        <span>{title}</span>
      </button>
    </>
  );
};

export default MainButton;