import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const InputBoxSettings = (props: Props) => {
  return (
    <div className="">
      <label className="flex gap-[25px] mt-5">
        {props.title && <div className=" mt-1 text-[15px] text-gold w-[170px]">{props.title}</div>}
        <input
          {...props}
          className=" bg-white w-[550px] h-[29px] text-[13px] py-[1px] rounded-[7px] border-2 border-gold pl-2 text-gold focus:border-gold  focus:outline-gold"
        />
      </label>
    </div>
  );
};

export default InputBoxSettings;
