import React from 'react';

const DropdownContent = () => {
    return (
        <div className="dropdown dropdown-hover">
        <li>
          <a>PROPERTIES</a>
        </li>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow uppercase   bg-black   w-[25vw] text-white text-xl"
          >
            <li>
              <a>Featured properties</a>
            </li>
            <li>
              <a>past transaction</a>
            </li>
            <li>
              <a>property videos</a>
            </li>
          </ul>
        </div>
    );
};

export default DropdownContent;