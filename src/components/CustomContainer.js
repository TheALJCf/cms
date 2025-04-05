import React from 'react';

function CustomContainer({children, className}) {
  return (
    <div className={`flex flex-col max-w-[1200px] h-full w-full ${className}`}>
        {children}
    </div>
  );
}
export default CustomContainer;