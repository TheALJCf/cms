import React from "react";

const CustomContainer = ({ children, className }) => {
  return (
    <div
      className={`flex h-full w-full flex-col md:max-w-[1200px] ${className}`}
    >
      {children}
    </div>
  );
};
export default CustomContainer;
