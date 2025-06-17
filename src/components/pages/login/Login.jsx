import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
function Login() {
  const [passwordShow, setPasswordShow] = useState(false);
  return (
    <div>
      <div
        className=" flex  items-center justify-center h-screen bg-no-repeat bg-center bg-cover text-white"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/c3/ff/3f/c3ff3f2812142c5fe122e16723e876d2.jpg)",
        }}
      >
        <div className="rounded-md shadow-2xl w-lg p-5 container m-auto backdrop-blur-sm">
          <div>
            <img
              src="src/assets/logo.png"
              alt=""
              className="w-[150px] m-auto"
            />
          </div>
          <h1 className="text-center font-bold my-4 text-lg">Login</h1>
          <form action="" className="space-y-4">
            <h1>
              <button className="btn btn-success w-full text-white font-semibold ">
                <FaFacebook size={25} /> Sing in with Facebook
              </button>
            </h1>
            <h1>
              <button className="btn btn-info w-full text-white font-semibold">
                <AiFillGoogleCircle size={25} />
                Sing in with Google
              </button>
            </h1>
            <h1>
              {" "}
              <button className="btn btn-accent w-full text-white font-semibold">
                <FaGithub size={25} />
                Sing in with Github
              </button>
            </h1>
            <h1 className="text-center font-bold text-gray-400">Or</h1>
            <input
              type="email"
              placeholder="email"
              className="input input-success w-full text-[17px] bg-transparent text-white"
            />
            <div className="relative">
              <input
                type={passwordShow ? "text" : "password"}
                placeholder="password"
                className="input input-success w-full text-[17px] bg-transparent text-white"
              />
              <button
                type="button"
                onClick={() => setPasswordShow(!passwordShow)}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-xl"
              >
                {passwordShow ? <IoEyeSharp /> : <FaEyeSlash />}
              </button>
            </div>
            <button className="btn btn-secondary w-full">LOGIN</button>
            <p className="text-center text-green-400 cursor-pointer hover:text-green-500 font-bold">
              Forgot Password
            </p>
            <h1 className="text-center">
              <span className="font-bold">New To Prothon Alo ?</span>{" "}
              <Link to={"/rege"} className="link link-error font-semibold">Create an account</Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
