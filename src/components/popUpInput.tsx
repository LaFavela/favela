import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const InputPopUp = (props: Props) => {
  return (
    <div className="pr-14 mb-2">
      <label>
        {props.title && (
          <div className="w-[120px] text-[11px] ml-[2px] text-gold mb-1">{props.title}</div>
        )}
        <input
          {...props}
          className="w-full rounded-[7px] border-2 text-[13px] py-[2px] border-gold pl-2 text-gold focus:border-gold  focus:outline-gold"
        />
      </label>
    </div>
  );
};

export default InputPopUp;
