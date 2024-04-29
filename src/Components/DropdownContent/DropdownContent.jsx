import React from "react";
import useAxios from "../../Hooks/useAxios";
import { Link } from "react-router-dom";

const DropdownContent = () => {
  const { data } = useAxios("category");
  return (
    <div className="dropdown dropdown-hover">
      <li>
        <a>HOME SEARCH</a>
      </li>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow uppercase   bg-black w-auto  
        lg:w-[25vw] text-white text-xl"
      >
        {data &&
          data.map((item) => (
            <Link to={`/homes/${item.categoryname}`}>
              <li key={item._id} item={item}>
                <a>{item.categoryname}</a>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default DropdownContent;
