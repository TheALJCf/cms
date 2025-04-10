import { twMerge } from "tailwind-merge";

const TextEdit = (props) => {
  const { title, customClassName } = props;
  const defaultClassName = twMerge(
    customClassName,
    "w-full overflow-ellipsis p-3 font-thin text-black opacity-30 focus:border-gray-900 focus:outline-none focus:opacity-100",
  );

  return (
    <div>
      <p>{title}</p>
      <input className={defaultClassName} {...props} />
    </div>
  );
};

export default TextEdit;
