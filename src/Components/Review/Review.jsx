import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import  { toast,Toaster } from "react-hot-toast";

const Review = () => {
  const { register, handleSubmit } = useForm();
const {user} = useContext(AuthContext);
const axiosPublic= useAxiosPublic();
  //function for post review to server
  const handleAddReview = async(data) => {
    
    const reviewData = {
        name:data.name,
        email:data.email,
        about:data.details,
        title:data.title
    }
    const res =await axiosPublic.post('/addReview',reviewData)
    if (res.data.insertedId) {
        const notify = () => {
          toast.success("Successfully Added Review!");
        };
        notify();
        // form.reset();
      }
  };
  return (
    <div className="text-black lg:w-[60vw] bg-sky-950 lg:h-[70vh] p-4 mx-auto  mt-8">
      <div className="lg:w-[30vw] text-center lg:flex flex-wrap items-center justify-center mx-auto">
        <div>
          <img src="" className="w-24" alt="" srcset="" />
        </div>
        <div>
          <h2 className="text-xl text-white font-mono ">Write Your Review!</h2>
        </div>
      </div>
      <form className="bg-gray-200 p-6 bg-opacity-15 my-16"  onSubmit={handleSubmit(handleAddReview)}>
        <div className=" grid grid-cols-1 lg:grid-cols-3  border-sky-950">
          <div className="w-full  ">
            <input
              type="text"
              required
              placeholder="Enter Your Name"
              {...register("name")}
              className="p-2 border border-sky-600 "
            />
          </div>

          <div className="w-full  ">
            <input
              type="text"
              required
              placeholder="Title Review"
              {...register("title")}
              className="p-2 border border-sky-600 "
            />
          </div>
          <div className="w-full  ">
            <textarea
              type="text"
              required
              placeholder="Detailes Review"
              {...register("details")}
              className=" w-full border border-sky-600 "
            />
          </div>

          <div className="w-full  ">
            <input
              type="email"
              required
              defaultValue={user?.email}
              placeholder="Your Email"
              {...register("email")}
              className="p-2 border border-sky-600 "
            />
          </div>

          <input
            className="bg-white px-24 py-3 text-sky-950 font-mono lg:col-span-3 mx-auto"
            type="submit"
          />
          <Toaster></Toaster>
        </div>
      </form>
    </div>
  );
};

export default Review;
