import React, { useState } from "react";
import { MainButtonProps } from "../types/common";

const MainButton: React.FC<MainButtonProps> = ({ title, onClick }) => {
  const [loading, setLoading] = useState(false);
  console.log("loading=====?",loading)

  const handleClick = async () => {
    setLoading(true);
    await onClick?.();
    setLoading(false);
  };

  return (
    <button
      className="actionBtn w-72 mx-auto"
      onClick={handleClick}
      disabled={loading}
    >
      <span className="font-bold text-gray-500 capitalize">
        {loading ? "Loading..." : title}
      </span>
    </button>
  );
};

export default MainButton;
