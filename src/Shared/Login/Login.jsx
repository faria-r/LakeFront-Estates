import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const {signIn} = useContext(AuthContext);
  //function to login a user
  const handleLogin = (data) =>{
    signIn(data.email,data.password)
    .then(result =>{
        const user = result.user;
        console.log(user)
    })
    .catch(error => console.log(error))
   navigate('/')
  }
  return (
    <div className="py-16 bg-sky-950 pb-16">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className=" border shadow-xl border-sky-950 bg-transparent lg:w-[30vw] mb-16 mx-auto py-8  px-8 bg-white"
      >
        <h2 className="text-3xl text-center mb-8 font-mono uppercase">
          Login Now
        </h2>
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
        <input
          className="btn my-2 w-full bg-sky-950 text-white px-16 py-2"
          type="submit" value='Log In With Google'
        /> <br />
        <input
          className="btn w-full bg-sky-950 text-white px-16 py-2"
          type="submit" value='Log In With Facebook'
        />
      </form>
    </div>
  );
};

export default Login;
