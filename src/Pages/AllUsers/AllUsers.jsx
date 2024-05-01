import React from "react";
import { useLoaderData } from "react-router-dom";
import useTanstack from "../../Hooks/useTanstack";
import { ImUsers } from "react-icons/im";
import logo from "../../assets/logo.png";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosPublic/useAxiosSecure";
import { MdAdminPanelSettings } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
const AllUsers = () => {
  AOS.init();
  const [user, refetch] = useTanstack();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  //make admin

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Success!",
          text: `${user.name} is Admin Now`,
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="text-black max-w-[60vw] mx-auto lg:mt-12">
      <div className="w-[15%] mx-auto text-center  mb-6  text-sky-950 text-3xl">
        <h2 className="  text-sky-900 ">
          <FaUsers />
        </h2>
      </div>

      <div>
        <div className="overflow-x-auto shadow-xl p-4 mb-8">
          <table className="table ">
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
              {user.map((u, index) => (
                <tr data-aos="zoom-out-right" data-aos-duration ="3000" key={u._id}>
                  <th>{index + 1}</th>
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
                  <td className="text-xl">
                    {
                      u.role === 'admin' ?  <MdAdminPanelSettings /> : <button
                      onClick={() => handleMakeAdmin(u)}
                      className="btn btn-ghost btn-xs text-xl"
                    >
                      <ImUsers />
                    </button>
                    }
                  </td>

                  <th>
                    <button
                      onClick={() => handleDelete(u)}
                      className="btn btn-ghost btn-xs text-xl"
                    >
                      <RiDeleteBin2Line />
                    </button>
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
