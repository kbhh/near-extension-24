import React, { FC } from "react";
import ContactsCard from "../components/card/ContactsCard";
import CreateNFTCard from "../components/card/CreateNFTCard";
import Web3Card from "../components/card/Web3Card";
import CollectiableItem from "../components/list/CollectiableItem";
const Landing: FC = () => {
  const imgs = [
    "https://robohash.org/7058a4120ed1413d0fd14d450fbcae0f?set=set4&bgset=&size=400x400",
    "https://gravatar.com/avatar/7058a4120ed1413d0fd14d450fbcae0f?s=400&d=robohash&r=x",
    "https://avatars.dicebear.com/v2/female/7058a4120ed1413d0fd14d450fbcae0f.svg",
  ];
  const collectables = [
    {
      name: "Digital Ninja",
      creator: "johndoe.near",
      img: "https://robohash.org/7058a4120ed1413d0fd14d450fbcae0f?set=set4&bgset=&size=400x400",
    },
    {
      name: "Panda",
      creator: "whitesnow355",
      img: "https://gravatar.com/avatar/7058a4120ed1413d0fd14d450fbcae0f?s=400&d=robohash&r=x",
    },
    {
      name: "Digital Ninja",
      creator: "whitesnow355",
      img: "https://avatars.dicebear.com/v2/female/7058a4120ed1413d0fd14d450fbcae0f.svg",
    },
  ];
  return (
    <div className="text-center	mx-2">
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
              aria-label="arrow"
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
      <div className="mt-2 flex">
        <ContactsCard imgs={imgs} />
        <Web3Card />
      </div>
      <div className="text-center mt-4">
        <CreateNFTCard />
      </div>
      <div className="mb-4 mt-3 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap text-center -mb-px"
          id="tabs"
          data-tabs-toggle="#tabslist"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 active"
              id="transactions-tab"
              data-tabs-target="#transactions"
              type="button"
              role="tab"
              aria-controls="transactions"
              aria-selected="false"
            >
              Transactions
            </button>
          </li>
          <li className="mr-2 " role="presentation">
            <button
              className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              id="collectibles-tab"
              data-tabs-target="#collectibles"
              type="button"
              role="tab"
              aria-controls="collectibles"
              aria-selected="true"
            >
              Collectibles
            </button>
          </li>
        </ul>
      </div>
      <div id="tabslist">
        <div
          className="p-2 mb-4 bg-white rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
          id="collectibles"
          role="tabpanel"
          aria-labelledby="collectibles-tab"
        >
          <ol className="divide-y divider-gray-200 dark:divide-gray-700">
            {collectables.map((item) => (
              <CollectiableItem
                name={item.name}
                key={item.img}
                creator={item.creator}
                img={item.img}
              />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Landing;
