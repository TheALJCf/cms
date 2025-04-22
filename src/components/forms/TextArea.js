import React from "react";
import { twMerge } from "tailwind-merge";

const CustomTextArea = ({ title, className, ...rest }) => {
  const defaultClassName = twMerge(
    "w-full overflow-ellipsis p-3 font-thin text-black opacity-30 focus:border-gray-900 focus:outline-none focus:opacity-100 ",
    className,
  );

  return (
    <div>
      <p>{title}</p>
      <textarea className={defaultClassName} {...rest} />
    </div>
  );
};

export default CustomTextArea;
