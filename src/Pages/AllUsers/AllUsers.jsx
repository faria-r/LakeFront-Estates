import React from "react";
import { useLoaderData } from "react-router-dom";
import useTanstack from "../../Hooks/useTanstack";
import { ImUsers } from "react-icons/im";
import logo from '../../assets/logo.png'
import { FaUsers } from "react-icons/fa";
const AllUsers = () => {
  const [user] = useTanstack();
  
  return (
    <div className="text-black max-w-[60vw] mx-auto lg:mt-16">
    <div className="w-[15%] mx-auto text-center  mb-6  text-sky-950 text-3xl">
   <h2 className="  text-sky-900 "><FaUsers /></h2>
    </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((u,index) => (
                <tr>
                  <th>
                    {index+1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={u.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{u.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{u.email}</td>
                  <td><ImUsers /></td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Make Admin</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
