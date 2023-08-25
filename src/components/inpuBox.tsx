import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const InputBox = (props: Props) => {
  return (
    <div className="pr-14">
      <label className="flex gap-24 mt-5">
        {props.title && <div className="text-[15px] text-gold w-[120px]">{props.title}</div>}
        <input
          {...props}
          className="w-full rounded-[7px] border-2 border-gold pl-2 text-gold focus:border-gold  focus:outline-gold"
        />
      </label>
    </div>
  );
};

export default InputBox;
