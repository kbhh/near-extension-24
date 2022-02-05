import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccount } from "../../store";

const SetupAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const vSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    accountid: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("Required"),
  });

  const submitData = (value: any) => {
    dispatch(setAccount(value.accountid + ".near"));
    navigate("/landing");
  };
  return (
    <>
      <header className="app-main-header py-12">
        <h3 className="text-align-center text-xl ">
          <span>Create NEAR account</span>
          <button
            type="button"
            className="absolute mx-2 right-0 rounded-full text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            data-collapse-toggle="toast-message-cta"
            aria-label="Close"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </h3>
      </header>
      <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="form-status-indicators-container">
            <p className="text-left text-gray-500">
              Enter an Account ID to use with your NEAR account. Your Account ID
              will be used for all NEAR operations, including sending and
              receiving assets.
            </p>
          </div>
          <Formik
            validateOnMount
            initialValues={{ email: "", accountid: "" }}
            validationSchema={vSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              submitData(values);
              setSubmitting(false);
            }}
          >
            {({ isValid, isSubmitting }) => (
              <Form>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-left ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name="email"
                  />
                  <ErrorMessage
                    className="mt-2 text-left text-sm text-red-600 dark:text-red-500"
                    name="email"
                    component="div"
                  />
                </div>

                <div>
                  <label
                    htmlFor="accountid"
                    className="block text-left mt-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Account id
                  </label>
                  <div className="relative">
                    <Field
                      type="text"
                      name="accountid"
                      id="accountid"
                      placeholder="Your name"
                      className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-3 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <div className="flex border-l-2 absolute inset-y-0 right-3 items-center pl-3 pointer-events-none">
                      <span>.near</span>
                    </div>
                  </div>
                  <div className="mt-1">
                    <ErrorMessage
                      className="mt-2  text-left text-sm text-red-600 dark:text-red-500"
                      name="accountid"
                      component="div"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={`text-white mt-12 ${
                    !isSubmitting && isValid ? "bg-indigo-500" : "bg-gray-400"
                  }   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-indigo-600 `}
                >
                  Continue
                  {isSubmitting && (
                    <svg
                      role="status"
                      className="inline ml-3 mr-3 w-4 h-4 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  {!isSubmitting && (
                    <svg
                      className="w-4 h-4 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  )}
                </button>
              </Form>
            )}
          </Formik>
          <div>
            <span className="text-gray-500">
              by clicking continue you must agree to near labs
            </span>
            <span className="text-indigo-500">
              <a href="#"> Terms & Conditions </a>
            </span>
            <span className="text-gray-500">and</span>
            <span className="text-indigo-500">
              <a href="#"> Privacy Policy</a>
            </span>
          </div>
          <div>
            <hr className="mx-2 text-grey-500" />
          </div>
          <div>
            <div>
              <span className="text-grey-800">Already have NEAR account?</span>
            </div>
            <div>
              <button
                type="submit"
                className="text-white mt-4 bg-neutral-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Log in with NEAR
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetupAccount;
