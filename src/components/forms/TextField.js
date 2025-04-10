const TextField = (props) => {
  const { title } = props;

  return (
    <div>
      <p>{title}</p>
      <input
        className={`w-full overflow-ellipsis p-3 font-thin text-black focus:border-gray-900 focus:outline-none ${props?.className ? props?.className : ""}}`}
        {...props}
      />
    </div>
  );
};

export default TextField;
