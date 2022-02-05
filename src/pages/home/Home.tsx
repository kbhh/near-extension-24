// import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import Email from "../../components/forms/Email";
// import Email from "../../components/forms/Email";
const HomePage = () => {
  useEffect(() => {
    console.log("logged");
  });
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <main className="">
          <div className="form-status-indicators-container">
            <span className="form-status-indicators-active form-status-indicators ">
              Email
            </span>
            <span className="form-status-indicators">Phone</span>
          </div>
        </main>
        <div className="mx-12 py-12">
          <Email />
        </div>
        {/* <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {
              email: "",
            };
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mt-1 relative rounded-md shadow-sm">
                <Field
                  type="email"
                  placeholder="Ex (337) 378 8383"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  name="email"
                />
              </div>
              <ErrorMessage className="" name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik> */}
      </div>
    </div>
  );
};

export default HomePage;
