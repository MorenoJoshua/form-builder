import React from "react";
import "./style.css";
import { InputInterface } from "../../interfaces";

const CustomInput = ({
  cols = 12,
  type = "text",
  pr,
  pl,
  label = "",
  className = "",
  ...props
}) => {
  const cssClass = `col-${cols} auto-form ${pl != null ? ` pl-${pl}` : ""} ${
    pr != null ? ` pr-${pr}` : ""
  } ${className}`;
  const { name } = props;

  switch (type) {
    case "header":
      return (
        <div className={cssClass}>
          <h5>{name}</h5>
        </div>
      );

    case "hr":
      return <div className="w-100ƒ">
        <hr className="w-100"/>
      </div>;

    case "textarea":
      return (
        <div className={cssClass}>
          <textarea name={name} className="form-control" {...props} />
        </div>
      );

    case "submit":
      return (
        <div className={cssClass}>
          <input
            type={type}
            name={name}
            className={`btn ${props.btnClass}`}
            {...props}
          />
        </div>
      );

    default:
      return (
        <div className={cssClass}>
          <label>
            {label}
            <input
              name={name}
              type={type}
              className="form-control"
              {...props}
            />
          </label>
        </div>
      );
  }
};
export default CustomInput as React.StatelessComponent<InputInterface>;
