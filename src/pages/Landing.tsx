import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Landing: FC = () => {
  const accountid = useSelector((state: RootState) => state.user.accountid);
  return (
    <div className="text-center	">
      <div className="bg-gray-100 py-3">
        <div className="w-2/4 ml-16 text-center  p-1 text-gray-500 bg-white rounded-3xl  dark:bg-gray-800 dark:text-gray-400">
          <div className="flex text-center">
            <img
              className="w-8 h-8 rounded-full "
              src="https://gravatar.com/avatar/7058a4120ed1413d0fd14d450fbcae0f?s=400&d=robohash&r=x"
              alt="avatar"
            />
            <div className="ml-3 mt-1.5 text-sm text-center font-normal">
              <span className="mb-1 text-sm font-light text-gray-500 dark:text-white">
                kibrom.near
              </span>
            </div>
            <button
              type="button"
              className="ml-auto bg-white rounded-full text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-collapse-toggle="toast-message-cta"
              aria-label="Close"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
