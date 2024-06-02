import React from "react";
import { useForm } from "react-hook-form";

import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import lease from '../../assets/lease.gif'
const AddHome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const imgHostingKey = import.meta.env.VITE_IMG_HOSTING_KEY;
  const hostingApi = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
  const handleAddHome = async (data) => {
    const imageFile = { image: data.photo[0] };
    const res = await axiosPublic.post(hostingApi, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const homeInformation = {
        name: data.name,
        price: data.price,
        Homepicture: res.data.data.display_url,
        type: data.type,
        neighbourhood: data.neighbourhood,
        address: data.address,
        categoryname: data.categoryname,
        interior: [
          {
            bed: data.bed,
            bath: data.bath,
            living: data.living,
            acres: data.acres,
            flooring: data.flooring,
            appliances: data.appliances,
            others: data.others,
          },
        ],
        exterior: [
          {
            garage: data.garage,
            stories: data.stories,
            pool: data.pool,
            roof: data.roof,
            heat: data.heat,
            sewer: data.sewer,
            others: data.others,
          },
        ],
      };
    }
  };
  return (
    <div className="text-black lg:w-[70vw] mx-auto  mt-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center lg:w-[35vw] mx-auto">
        <div>
            <img src={lease}  className='w-24'alt="" srcset="" />
        </div>
        <div>
            <h2 className="text-xl font-mono ">Add A New Property!</h2>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(handleAddHome)}
        className="border  border-sky-950  p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div className="w-full">
          <select
            className="select rounded-none select-bordered p-[1px] border border-sky-600 w-full max-w-xs"
            {...register("name")}
            required
          >
            <option disabled selected>
              Home Name
            </option>
            <option>lake oconee luxury homes</option>
            <option>raynoldes lake oconee luxury homes</option>
            <option>raynoldes lake</option>
            <option>lake oconee</option>
            <option>mls home</option>
            <option>lake oconee condos</option>
          </select>
        </div>
        <div className="w-full">
          <select
            className="select rounded-none select-bordered p-[1px] border border-sky-600 w-full max-w-xs"
            {...register("categoryname")}
            required
          >
            <option disabled selected>
              Category Name
            </option>
            <option>lake oconee luxury homes</option>
            <option>raynoldes lake oconee luxury homes</option>
            <option>raynoldes lake</option>
            <option>lake oconee</option>
            <option>mls home</option>
            <option>lake oconee condos</option>
          </select>
        </div>
        <div className="w-full">
          <input
            type="file"
            required
            placeholder="Enter Price"
            {...register("photo")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <textarea
            type="text"
            required
            placeholder="Detailes Information"
            {...register("details")}
            className=" w-full border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <select
            className="select rounded-none select-bordered p-[1px] border border-sky-600 w-full max-w-xs"
            {...register("type")}
            required
          >
            <option disabled selected>
              Home Type
            </option>
            <option>Residential</option>
            <option>Commercial</option>
          </select>
        </div>
        <div className="w-full">
          <select
            className="select rounded-none select-bordered p-[1px] border border-sky-600 w-full max-w-xs"
            {...register("neighbourhood")}
            required
          >
            <option disabled selected>
              Neighbourhood
            </option>
            <option>lake oconee luxury homes</option>
            <option>raynoldes lake oconee luxury homes</option>
            <option>raynoldes lake</option>
            <option>lake oconee</option>
            <option>mls home</option>
            <option>lake oconee condos</option>
          </select>
        </div>
        <div className="w-full">
          <input
            type="text"
            required
            placeholder="Enter Address"
            {...register("address")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <input
            type="number"
            required
            placeholder="Bedroom Number"
            {...register("bed")}
            className="p-2 border border-sky-600 "
          />
          
        </div>{" "}
        <div className="w-full">
          <input
            type="number"
            required
            placeholder="Enter Price"
            {...register("price")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <input
            type="number"
            required
            placeholder="Number of Bath"
            {...register("bath")}
            className="p-2 border border-sky-600 "
          />
        </div>{" "}
        <div className="w-full">
          <input
            type="number"
            required
            placeholder="Living Area"
            {...register("living")}
            className="p-2 border border-sky-600 "
          />
        </div>{" "}
        <div className="w-full">
          <input
            type="number"
            required
            placeholder="Acress Area"
            {...register("acres")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <input
            type="number"
            required
            placeholder="Enter garage Number"
            {...register("garage")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <input
            type="number"
            required
            placeholder="Enter Stories"
            {...register("stories")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            required
            placeholder="pool Area"
            {...register("pool")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            required
            placeholder="Roof Area"
            {...register("roof")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            required
            placeholder="Heat level"
            {...register("heat")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            required
            placeholder="sewer"
            {...register("sewer")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            required
            placeholder="Others Interior Features"
            {...register("others")}
            className="p-2 border border-sky-600 "
          />
        </div>
       
       
        <div className="w-full">
          <input
            type="text"
            required
            placeholder="Florring Status"
            {...register("flooring")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            required
            placeholder="Appliences Status"
            {...register("appliances")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            required
            placeholder="Others Status"
            {...register("others")}
            className="p-2 border border-sky-600 "
          />
        </div>
        <input className="bg-sky-950 px-24 py-3 text-white font-mono col-span-3 mx-auto" type="submit" />
      </form>
    </div>
  );
};

export default AddHome;
