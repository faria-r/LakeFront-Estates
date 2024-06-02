import React from "react";
import { useForm } from "react-hook-form";

const AddHome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imgHostingKey = import.meta.env.VITE_IMG_HOSTING_KEY;
  const hostingApi =`https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
  const handleAddHome = (data) => {
    const name = data.example;
    console.log(name);
  };
  return (
    <div className="text-black lg:w-[70vw] mx-auto border  border-sky-950  p-4 mt-24">
      <form
        onSubmit={handleSubmit(handleAddHome)}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {/* register your input into the hook by invoking the "register" function */}

        <div>
          <input
          required
            className=" p-2 border border-sky-600"
            defaultValue="test"
            {...register("example")}
            
          />
           
        </div>
  

        <input className="bg-sky-950 col-span-3 mx-auto" type="submit" />
      </form>
    </div>
  );
};

export default AddHome;
