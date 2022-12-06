import React, { Fragment } from "react";
import TextInput from "../UI/TextInput";
import { useFormikContext } from "formik";

const AppField = ({ name, ...otherProp }: any) => {
  const { handleChange } = useFormikContext();
  return (
    <Fragment>
      <TextInput name={name} onChange={handleChange} {...otherProp} />
    </Fragment>
  );
};

export default AppField;
