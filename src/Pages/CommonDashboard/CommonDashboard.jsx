import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FcInvite, FcPhone } from "react-icons/fc";
import { Link } from "react-router-dom";

const CommonDashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" lg:w-[25vw] p-4 h-auto mx-auto mt-16 bg-sky-800  text-center mb-16 shadow-xl text-white">
      <div className="avatar   mx-auto">
  <div className="w-16 mask mask-hexagon mx-auto">
    <img src={user.photoURL}/>
  </div>
</div>
      <h2 className="text-xl mb-2 text-center">{user.displayName}</h2>
      <div className="text-start items-start p-4">
        <p className="flex justify-center items-center">
          <FcInvite className="text-xl mr-2" /> {user.email}
        </p>
      </div>
      <div className="card-actions w-36 mx-auto">
        
          <button className="btn w-36 my-4 mx-auto border-white bg-transparent text-white">
           Get Started
          </button>
       
      </div>
    </div>
  );
};

export default CommonDashboard;
