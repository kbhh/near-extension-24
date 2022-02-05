import { FC } from "react";

interface ContactsProp {
  imgs: string[];
}
const ContactsCard: FC<ContactsProp> = ({ imgs }) => {
  return (
    <div
      id="toast-message-cta"
      className="w-2/4 ml-1 bg-blue-100 max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400"
      role="alert"
    >
      <div className="flex mt-1">
        <div className="ml-3 text-left text-sm font-normal">
          <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
            Contacts
          </span>
          <div className="mb-2 mt-3 text-sm font-normal flex">
            {imgs.map((img) => (
              <img
                className="w-8 h-8 rounded-full "
                key={img}
                src={img}
                alt="avatar"
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5  text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-collapse-toggle="toast-message-cta"
          aria-label="continue"
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
};

export default ContactsCard;
