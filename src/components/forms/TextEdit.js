import { twMerge } from "tailwind-merge";

const TextEdit = ({ title, className, ...rest }) => {
  const defaultClassName = twMerge(
    className,
    "w-full overflow-ellipsis p-3 font-thin text-black opacity-30 focus:border-gray-900 focus:outline-none focus:opacity-100",
  );

  return (
    <div className="flex flex-col">
      <p>{title}</p>
      <input className={defaultClassName} {...rest} />
    </div>
  );
};

export default TextEdit;
