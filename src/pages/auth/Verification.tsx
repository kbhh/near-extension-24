import React, { useEffect, useState } from "react";
// import * as Yup from "yup";
// import apiRequest from "../../service/apiRequest";
import ReactCodeInput from "react-verification-code-input";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RootState } from "../../store";
const VerficationPage = () => {
  //   const [isEmail, setIsEmail] = useState(true);
  //   const phoneNumberRegx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const isEmail = useSelector((state: RootState) => state.user.isEmail);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const value = useSelector((state: RootState) =>
    isEmail ? state.user.email : state.user.phonenumber
  );
  const matchCode = (value: string) => {
    if (value === "123456") {
      setIsValid(true);
      navigate("/setup-account");
    } else {
      setIsValid(false);
    }
  };
  useEffect(() => {
    console.log("logged", value);
    // changeForm(true);
  });
  return (
    <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <main className="">
          <div className="form-status-indicators-container">
            We have sent a 6-digit verification code to the email address
            <span className="text-indigo-500">
              <a href="#">
                {!isEmail && " +"}
                {" " + value}
              </a>
            </span>
          </div>
        </main>
        <div className="text-center">
          <div>
            <ReactCodeInput onComplete={(value) => matchCode(value)} />
          </div>
          <div>
            <button
              type="button"
              disabled={!isValid}
              className={`text-white ${
                isValid ? "bg-indigo-500" : "bg-gray-400"
              } mt-12 bg-indigo-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-indigo-600 `}
            >
              Continue
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
            </button>
          </div>
        </div>
        <hr className="mx-3 text-grey-500" />
        <div>
          <span className="text-gray-500">Didn&#39;t receive your code?</span>
        </div>
        <div>
          <span className="text-indigo-500">
            <a href="/">
              Send to a different
              <span>{isEmail ? " email adderss" : " phone number"}</span>
            </a>
          </span>
        </div>
        <div>
          <span className="text-indigo-500">
            <a href="#"> Resend your code </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerficationPage;
