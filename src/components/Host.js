import React from "react";

const Host = ({ name, img, role, twitter }) => (
  <div className="host-details flex bg-white py-4 pl-4 pr-8 mt-4 rounded-lg">
    <img
      alt={`${name} avatar`}
      className="host-avatar w-16 h-16 rounded-full mr-4 border-2 border-gray-100"
      src={img}
    />
    <div className="text-left">
      <p className="font-bold text-lg leading-none text-gray-700">{name}</p>
      <p className="text-gray-600">{role}</p>
      <div className="flex mt-2">
        <a href={`https://twitter.com/${twitter}`}>
          <svg
            fill="#1da1f2"
            height="16"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default Host;
