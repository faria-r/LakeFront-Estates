import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosPublic/useAxiosSecure";

const ScheduleLists = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: schedules = [] } = useQuery({
    queryKey: ["schedules"],
    queryFn: async () => {
      const res = await axiosSecure.get("/schedules");
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="text-black max-w-[60vw] mx-auto lg:mt-12">
      <div className="w-[15%] mx-auto text-center  mb-6  text-sky-950 text-3xl">
        <h2 className="  text-sky-900 ">
          <FaUsers />
        </h2>
      </div>

      <div>
        <div className="overflow-x-auto shadow-xl p-4 mb-8">
          <table className="table text-black">
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
                <th>Schedule</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((u, index) => (
                <tr
                  data-aos="zoom-out-right"
                  data-aos-duration="3000"
                  key={u._id}
                >
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{u.user_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{u.user_email}</td>
                  <td>{u.message}</td>
                  <td className="text-xl">
                    <button className="btn btn-primary">Confirm</button>
                  </td>

                  <th></th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScheduleLists;
