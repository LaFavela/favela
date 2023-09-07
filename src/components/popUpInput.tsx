import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  
> & {
  isWmax? : boolean
};

const InputPopUp = (props: Props) => {
  let container = " pr-14 "
  if(props.isWmax){
    container = " "

  }
  return (
    <div className={container+" mb-2"}>
      <label>
        {props.title && (
          <div className="w-[120px] text-[11px] ml-[2px] text-gold mb-1">{props.title}</div>
        )}
        <input
          {...props}
          className="w-full rounded-[7px] border border-gold pl-2 text-gold focus:border-gold  focus:outline-gold"
        />
      </label>
    </div>
  );
};

export default InputPopUp;
