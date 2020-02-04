import React from 'react';
import CustomInput from '../input';
import { CustomFormInterface } from '../../interfaces';

const CustomForm = ({ fields, handleSubmit, ...props }) => (
  <form onSubmit={handleSubmit} {...props}>
    <div className="row">
      {fields.map((f, k) => <CustomInput {...f} key={k} />)}
    </div>
  </form>
);

export default CustomForm as React.StatelessComponent<CustomFormInterface>;