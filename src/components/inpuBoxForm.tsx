import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const InputBoxForm = (props: Props) => {
  return (
    <div className="pr-14">
      <label className="flex gap-[60px] mt-5">
        {props.title && <div className="text-[15px] text-gold w-[170px]">{props.title}</div>}
        <input
          {...props}
          className=" bg-white w-full text-[15px] py-[1px] rounded-[7px] border-2 border-gold pl-2 text-gold focus:border-gold  focus:outline-gold"
        />
      </label>
    </div>
  );
};

export default InputBoxForm;
