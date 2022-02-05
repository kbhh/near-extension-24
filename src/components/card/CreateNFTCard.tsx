import { FC } from "react";

const CreateNFTCard: FC = () => (
  <div
    id="toast-message-cta"
    className="w-full bg-red-100 p-4 text-gray-500 rounded-lg shadow dark:bg-gray-800 dark:text-gray-400"
    role="alert"
  >
    <div className="flex mt-1">
      <div className="text-left text-sm font-normal">
        <span className="mb-1 w-1/4 text-sm font-semibold text-gray-900 text-black">
          Start Creating your NFT Today
        </span>
        <div className="mb-2 mt-6 text-sm font-normal flex">
          <button
            type="button"
            className="text-white flex bg-purple-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-normal rounded-lg text-sm px-3 py-2 text-center  mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Create NFT
            <svg
              className="w-4 h-3 mt-1 ml-2"
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
);
export default CreateNFTCard;
