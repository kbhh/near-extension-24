import { FC } from "react";

const Web3Card: FC = () => (
  <div
    id="toast-message-cta"
    className="w-2/4 ml-2 bg-purple-500 max-w-xs p-4 text-gray-500 rounded-lg shadow dark:bg-gray-800 dark:text-gray-400"
    role="alert"
  >
    <div className="flex mt-1">
      <div className="text-left text-sm font-normal">
        <span className="mb-1 text-sm font-semibold text-gray-900 text-white">
          web3 Apps
        </span>
        <div className="mb-2 mt-3 text-sm font-normal flex">
          <button
            type="button"
            className="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-normal rounded-lg text-sm px-1.5 py-2 text-center  mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            12 Connected
          </button>
        </div>
      </div>

      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5  text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
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
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  </div>
);
export default Web3Card;
