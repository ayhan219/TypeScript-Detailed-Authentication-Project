import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BiSolidCommentError } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

type loginProps = {
  setIsLogin: (value: boolean) => void;
};

const Login = ({ setIsLogin }: loginProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleEmail = (emailInput: string) => {
    setEmail(emailInput);
    const hasValidInput =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput);
    setIsEmailValid(hasValidInput);
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
        {/* Email */}
        <div className="w-full flex flex-col gap-2 text-white relative">
          <div className="flex justify-between">
            <span className="text-xl font-semibold">Email</span>
            {!isEmailValid && email !== "" && (
              <span className="text-red-600">Invalid Email</span>
            )}
          </div>
          <input
            onChange={(e) => handleEmail(e.target.value)}
            className={`w-full h-12 p-3 ${
              !isEmailValid && email !== ""
                ? "border-red-600 focus:border-red-600"
                : isEmailValid && email !== ""
                ? "border-green-600 focus:border-green-600"
                : "border-gray-400 focus:border-white"
            } bg-[#242A55] outline-none border rounded-md`}
            type="text"
          />

          {/* Error Icon with Tooltip */}
          {isEmailValid && email !== "" ? (
            <div
              className="absolute text-2xl text-green-600 right-0 top-12 mr-2 cursor-pointer"
              title="Username is valid"
            >
              <TiTick />
            </div>
          ) : (
            !isEmailValid &&
            email !== "" && (
              <div
                className="absolute text-2xl text-red-600 right-0 top-12 mr-2 cursor-pointer"
                title="Invalid Email"
              >
                <BiSolidCommentError />
              </div>
            )
          )}
        </div>
        <div className="w-full flex flex-col gap-2 text-white relative">
          <span className="text-xl font-semibold">Password</span>
          <input
            className="w-full p-3 h-12 bg-[#242A55] outline-none border border-gray-400 focus:border-white rounded-md"
            type={`${!showPassword ? "password": "text"}`}
          />
          {!showPassword ? (
            <FaEye onClick={()=>setShowPassword(!showPassword)} className=" text-xl absolute right-0 top-12 mr-3 cursor-pointer" />
          ) : (
            <FaEyeSlash onClick={()=>setShowPassword(!showPassword)} className=" text-xl absolute right-0 top-12 mr-3 cursor-pointer" />
          )}
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
        <span
          onClick={() => setIsLogin(true)}
          className="text-blue-500 font-semibold cursor-pointer"
        >
          Signup
        </span>
      </div>
    </div>
  );
};

export default Login;
