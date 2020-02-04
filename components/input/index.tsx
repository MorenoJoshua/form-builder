import React from 'react';
import './style.css'
import { InputInterface } from '../../interfaces';

const CustomInput = ({ cols = 12, type = 'text', pr, pl, label = '', className = '', ...props }) => {

  const cssClass = `col-${cols} auto-form ${pl != null ? ` pl-${pl}` : ''} ${pr != null ? ` pr-${pr}` : ''} ${className}`;

  switch (type) {

    case 'textarea':
      return (
        <div className={cssClass}>
          <textarea name={name} className="form-control" {...props}></textarea>
        </div>
      );

    case 'submit':
      return (
        <div className={cssClass}>
          <input type={type} name={name} className={`btn ${props.btnClass}`} {...props} />
        </div>
      )

    default:
      return (
        <div className={cssClass}>
          <label>
            {label}
            <input name={name} type={type} className="form-control" {...props} />
          </label>
        </div>
      )
  }
}
export default CustomInput as React.StatelessComponent<InputInterface>