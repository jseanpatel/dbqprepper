import React from "react";
import { Link } from "gatsby";
import { Icon } from "@iconify/react";
import koFi from "@iconify/icons-simple-icons/ko-fi";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

library.add(faNewspaper);

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="px-2 mx-auto font-sans max-w-7xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              {/* <!-- Icon when menu is closed. -->
          <!-- Menu open: "hidden", Menu closed: "block" --> */}
              <svg
                className="block w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!-- Icon when menu is open. -->
          <!-- Menu open: "block", Menu closed: "hidden" --> */}
              <svg
                className="hidden w-6 h-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div className="relative flex-shrink-0">
             

            <div className="hidden md:relative md:block">
             <Link to="/">
            
              <FontAwesomeIcon icon={faNewspaper} className="text-gray-900 fa-2x "/>
              </Link>
              </div>
            
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex"></div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ">
              <div className="flex flex-row items-center ">
                <Link
                  className="mr-6 font-semibold text-black text-md md:text-xl sm:mr-12"
                  to="/"
                >
                  {" "}
                  Home{" "}
                </Link>
                <Link
                  className="mr-6 font-semibold text-black text-md md:text-xl sm:mr-12"
                  to="/about"
                >
                  {" "}
                  About{" "}
                </Link>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ko-fi.com/jseanpatel"
                >
                  <p className="mr-4 font-semibold text-black sm:mr-2 text-md md:text-xl">
                    {" "}
                    Donate{" "}
                  </p>
                </a>
                <a
                  className="mr-2 sm:mr-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://ko-fi.com/jseanpatel"
                >
                  <Icon height="30px" icon={koFi}></Icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
