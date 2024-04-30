import React, { useContext } from "react";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";

const SignUP = () => {
  const { register,reset, handleSubmit } = useForm();
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic()
const navigate = useNavigate();

  //function to create user with email password
  const handleCreateUser = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name,data.photoURL)
        .then(()=>{
          console.log('user profile is updated')
          //create user entry in the database
          const userInfo = {
            name:data.name,
            email:data.email
          }
          axiosPublic.post('/users',userInfo)
          .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
              reset();
              Swal.fire({
                title: "Updated User Information",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              navigate('/login')
            }
          console.log('added in db')
          })
          .catch(e => console.log(e))
     
        
        })
      })
      .catch((error) => {
        console.log(error);
      });
      
  };
  return (
    <div className="py-16 bg-sky-950 pb-16">
      <form
        onSubmit={handleSubmit(handleCreateUser)}
        className=" border shadow-xl border-sky-950 bg-transparent lg:w-[30vw] mb-16 mx-auto py-8  px-8 bg-white"
      >
        <h2 className="text-3xl text-center mb-8 font-mono uppercase">
          Register Now
        </h2>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="text"
            {...register("name")}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="text"
            {...register("photoURL")}
            placeholder="PhotoURL"
          />
        </div>
        <div>
          <input
            className="w-full my-2 p-4 border"
            type="email"
            {...register("email")}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            className="w-full p-4 border"
            type="password"
            {...register("password")}
            placeholder="Password"
          />
        </div>

        <input
          className="btn mt-6 w-full bg-sky-950 text-white px-16 py-2"
          type="submit"
        />
        <p className="text-center my-2">
          Already Have An Account?{" "}
          <Link className="text-blue-600 underline" to="/login">
            Login Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUP;
