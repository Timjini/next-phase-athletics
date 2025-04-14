import React from "react";
import { MainButtonProps } from "../types/common";

const MainButton: React.FC<MainButtonProps> = ({ title, onClick }) => {
  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter
          width="3000%"
          x="-1000%"
          height="3000%"
          y="-1000%"
          id="unopaq"
        >
          <feColorMatrix
            values="1 0 0 0 0 
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 3 0"
          />
        </filter>
      </svg>

      <div className="backdrop"></div>
      <button className="button mt-8" onClick={onClick}>
        <div className="a l"></div>
        <div className="a r"></div>
        <div className="a t"></div>
        <div className="a b"></div>
        <div className="text">{title}</div>
      </button>
    </>
  );
};

export default MainButton;