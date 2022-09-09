import React, { FC } from "react";

interface progressBarProps {
  id?: number;
  heading?: string;
  para?: number;
  color?: string;
}
const Progressbar: FC<progressBarProps> = ({ id, heading, para, color }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-between">
          <div>{heading}</div>
          <div>{para}%</div>
        </div>
        <div
          className={`h-1 mt-2 w-${para}%`}
          style={{
            width: `${para}%`,
            backgroundColor: `${color}`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Progressbar;
