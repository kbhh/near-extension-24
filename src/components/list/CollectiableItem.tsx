import React, { FC } from "react";

interface CollecitableProps {
  name: string;
  creator: string;
  img: string;
}

const CollectiableItem: FC<CollecitableProps> = ({ name, creator, img }) => (
  <li className="text-left ">
    <a href="#" className="flex items-center  ">
      <span className=" mr-6 absolute right-0 items-center  font-normal text-gray-500 dark:text-gray-400">
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
      </span>
      <img
        className="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0"
        src={img}
        alt="Jese Leos image"
      />

      <div className="text-gray-600 dark:text-gray-400">
        <div className="text-base font-normal">
          <span className="font-medium text-gray-900 dark:text-white">
            {name}
          </span>
          <br />
          <span className="font-normal text-sm text-gray-900 dark:text-white">
            by <span className="text-indigo-600">{creator}</span>
          </span>
        </div>
      </div>
    </a>
  </li>
);
export default CollectiableItem;
