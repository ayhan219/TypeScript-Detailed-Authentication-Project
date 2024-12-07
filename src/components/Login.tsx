import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


type loginProps ={
    setIsLogin: (value: boolean) => void;
}


const Login = ({setIsLogin}:loginProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="w-[40%] h-[80%] bg-[#242A55] animate-slideDown ">
      <div className="text-white text-3xl font-medium text-center ">Login</div>
      <div className="w-full h-28 flex gap-3 p-7">
        <div className="w-full h-16 bg-[#242A55] border border-white text-white flex p-3  items-center rounded-lg cursor-pointer">
          <div className="w-[30%] h-auto text-4xl ">
            <FaGithub />
          </div>
          <div className="w-[70%] h-auto text-xl pl-3  ">
            <h3>GitHub</h3>
          </div>
        </div>
        <div className="w-full h-16 bg-[#242A55] border border-blue-700 text-white flex p-3  items-center rounded-lg cursor-pointer">
          <div className="w-[30%] h-auto text-4xl ">
            <FaTwitter />
          </div>
          <div className="w-[70%] h-auto text-xl pl-3  ">
            <h3>Twitter</h3>
          </div>
        </div>
        <div className="w-full h-16 bg-[#242A55] border border-red-700 text-white flex p-3  items-center rounded-lg cursor-pointer">
          <div className="w-[30%] h-auto text-4xl ">
            <FcGoogle />
          </div>
          <div className="w-[70%] h-auto text-xl pl-3  ">
            <h3>Google</h3>
          </div>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center gap-3 text-gray-400">
        <div className="w-full h-[0.10rem] bg-gradient-to-r from-transparent to-gray-400"></div>
        <span>OR</span>
        <div className="w-full h-[0.10rem] bg-gradient-to-l from-transparent to-gray-400"></div>
      </div>

      <div className="w-full h-auto p-7 flex flex-col gap-6">
        <div className="w-full flex flex-col gap-2 text-white">
          <span className="text-xl font-semibold">Email</span>
          <input
            className="w-full h-12 p-3 bg-[#242A55] outline-none border border-gray-400 focus:border-white rounded-md"
            type="text"
          />
        </div>
        <div className="w-full flex flex-col gap-2 text-white">
          <span className="text-xl font-semibold">Password</span>
          <input
            className="w-full p-3 h-12 bg-[#242A55] outline-none border border-gray-400 focus:border-white rounded-md"
            type="password"
          />
        </div>
      </div>

      <div className="w-full h-auto flex  p-7">
        <div
          className={`w-6 h-6 cursor-pointer flex items-center justify-center appearance-none bg-[#5B50EB] rounded-md border-2 border-gray-400 ${
            isChecked ? "bg-[#34D399]" : "bg-[#5B50EB]"
          }`}
          onClick={handleCheckboxChange}
        >
          {isChecked && <FaCheck className="text-white" />}
        </div>
        <label
          htmlFor="styled-checkbox"
          className="ml-2 text-[#818EAE] cursor-pointer"
          onClick={handleCheckboxChange}
        >
          I agree to the Privacy Policy and Terms of Service.
        </label>
      </div>

      <div className="w-full h-16 p-7 flex items-center">
        <button className="bg-[#4F65F1] w-full h-14 rounded-lg text-white">
          Login
        </button>
      </div>
      <div className="w-full h-auto flex justify-center pt-3 text-xl gap-2">
        <p className="text-[#818EAE]">Don't have an account?</p>
        <span onClick={()=>setIsLogin(true)} className="text-blue-500 font-semibold cursor-pointer">
          Signup
        </span>
      </div>
    </div>
  );
};

export default Login;
