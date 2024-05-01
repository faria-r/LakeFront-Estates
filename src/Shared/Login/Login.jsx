import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { IoIosLogIn } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";


const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.from?.pathname || '/'
  const {signIn,loginWithGoogle} = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  //function to login a user
  const handleLogin = (data) =>{
    signIn(data.email,data.password)
    .then(result =>{
        const user = result.user;
        console.log(user)
    })
    .catch(error => console.log(error))
    navigate(from,{replace:true})
  }
  //function to login with google
  const handleLoginWithGoogle = () =>{
    loginWithGoogle(provider)
    .then(result => {

      console.log(result.user)
      const userInfo = {
        email:result.user?.email,
        name:result.user?.displayName,
        photo:result.user?.photoURL
      }
      axiosPublic.post('/users',userInfo)
      .then(res=>{
      console.log(res.data);
      navigate(from,{replace:true})
      })
    }
    )
    .catch(error => console.log(error))
  
  }
  const myStyle = {
    backgroundImage:
        "url('https://i.ibb.co/Xp2qtXb/ej.jpg')",
    minHeight: "100vh",

   
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    <div className="py-12 pb-28" style={myStyle}>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className=" border shadow-xl border-sky-950 bg-transparent lg:w-[30vw] mb-16 mx-auto py-8  px-8 bg-white opacity-70"
      >
        <div className="">
        <h2 className="text-5xl w-8 mx-auto text-center font-mono uppercase">
        <IoIosLogIn />
        </h2>
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
<p className="text-center my-2">Don't Have An Account? <Link className="text-blue-600 underline" to='/signup'>Register Now</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleLoginWithGoogle} className="btn my-2 w-full bg-sky-950 text-white text-xl px-16 py-2"
          >Log In With <FcGoogle /></button> <br />
          <button className="btn my-2 w-full text-xl bg-sky-950 text-white px-16 py-2"
          >Log In With <FaFacebookF /> </button> 
        
      </form>
    </div>
  );
};

export default Login;
