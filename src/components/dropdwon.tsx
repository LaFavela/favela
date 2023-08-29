import React from "react";
import PropTypes from "prop-types";

export default function Dropdown(props: {
  title: any;
  value: any;
  data: any;
  styleClass: any;
  styleClassTag: any;
  placehoder: any;
  onChange: any;
  form: any;
  styleText:any;
}) {
  const {
    title,
    value,
    data,
    placehoder,
    styleClass,
    styleClassTag,
    onChange,
    form,
    styleText
  } = props;
  const handleChange = (event: any) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <div className={styleClass}>
      <div className={styleClass}>
        <p className={`py-[2px] ${styleText}`}>{title}</p>
        <select
          value={value}
          onChange={handleChange}
          className={`${styleClassTag}`}
          form={form}
        >
          <option value="" disabled hidden>
            {placehoder}{" "}
          </option>
          {data.map((data: any, index: any) => (
            <option value={data.value} key={index} className="rounded-lg">
              {data.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

Dropdown.prototype = {
  form: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  data: PropTypes.array.isRequired,
  styleClass: PropTypes.string,
  styleClassTag: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  styleText: PropTypes.string,
};

Dropdown.defaultProps = {
  form: "",
  title: "",
  value: "",
  placeholder: "",
  styleClass: "",
  styleClassTag: "",
  styleText: "",
};
