import React, { PropsWithChildren } from "react";
import { Formik } from "formik";

const AppForm = ({
  initialValue,
  onSubmit,
  validationSchema,
  children,
}: any) => {
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => children}
    </Formik>
  );
};

export default AppForm;
