import React from "react";

const CustomTextArea = (props) => {
  const { title } = props;

  return (
    <div>
      <p>{title}</p>
      <textarea
        className={`h-[91px] w-full overflow-ellipsis p-3 font-thin text-black focus:border-gray-900 focus:outline-none ${props?.className ? props?.className : ""}}`}
        {...props}
      />
    </div>
  );
};

export default CustomTextArea;
