import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { BiSolidCommentError } from "react-icons/bi";
import ReactTooltip from "react-tooltip";

type signupProps = {
  setIsLogin: (value: boolean) => void;
};

const Signup = ({ setIsLogin }: signupProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);

  const [email,setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleUsername = (usernameInput: string) => {
    setUsername(usernameInput);
    const hasNumber = /\d/.test(usernameInput);
    setIsUsernameValid(hasNumber);
  };

  const handleEmail = (emailInput:string)=>{
    setEmail(emailInput);
    const hasValidInput = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput);
    setIsEmailValid(hasValidInput);
  }

  return (
    <div className="w-[40%] h-[90%] bg-[#242A55] p-6 rounded-lg  animate-slideDown">
      {/* Title */}
      <div className="text-white text-3xl font-medium text-center mb-6">
        Signup
      </div>

      {/* Social Signup */}
      <div className="w-full h-28 flex gap-3">
        <div className="w-full h-16 bg-[#242A55] border border-white text-white flex p-3 items-center rounded-lg cursor-pointer">
          <div className="w-[30%] h-auto text-4xl">
            <FaGithub />
          </div>
          <div className="w-[70%] h-auto text-xl pl-3">
            <h3>GitHub</h3>
          </div>
        </div>
        <div className="w-full h-16 bg-[#242A55] border border-blue-700 text-white flex p-3 items-center rounded-lg cursor-pointer">
          <div className="w-[30%] h-auto text-4xl">
            <FaTwitter />
          </div>
          <div className="w-[70%] h-auto text-xl pl-3">
            <h3>Twitter</h3>
          </div>
        </div>
        <div className="w-full h-16 bg-[#242A55] border border-red-700 text-white flex p-3 items-center rounded-lg cursor-pointer">
          <div className="w-[30%] h-auto text-4xl">
            <FcGoogle />
          </div>
          <div className="w-[70%] h-auto text-xl pl-3">
            <h3>Google</h3>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-auto flex justify-center items-center gap-3 text-gray-400 my-6">
        <div className="w-full h-[0.10rem] bg-gradient-to-r from-transparent to-gray-400"></div>
        <span>OR</span>
        <div className="w-full h-[0.10rem] bg-gradient-to-l from-transparent to-gray-400"></div>
      </div>

      {/* Form Inputs */}
      <div className="w-full h-auto flex flex-col gap-6">
        {/* Name */}
        <div className="w-full flex flex-col gap-2 text-white relative">
          <div className="flex justify-between">
          <span className="text-xl font-semibold">Username</span>
          {!isUsernameValid && username !== "" &&(
            <span className="text-red-600">Username must contain at least one number</span>
          )}
          </div>
          <input
            onChange={(e) => handleUsername(e.target.value)}
            className={`w-full h-12 p-3 ${
              !isUsernameValid && username !== ""
                ? "border-red-600 focus:border-red-600"
                : "border-gray-400 focus:border-white"
            } bg-[#242A55] outline-none border rounded-md`}
            type="text"
          />
          {/* Error Icon with Tooltip */}
          {!isUsernameValid && username !== "" && (
            <div
              className="absolute text-2xl text-red-600 right-0 top-12 mr-2 cursor-pointer"
              title="Username must contain at least one number"
            >
              <BiSolidCommentError />
            </div>
          )}
        </div>

        {/* Email */}
        <div className="w-full flex flex-col gap-2 text-white relative">
        <div className="flex justify-between">
          <span className="text-xl font-semibold">Email</span>
          {!isEmailValid && email !== "" &&(
            <span className="text-red-600">Invalid Email</span>
          )}
          </div>
          <input
            onChange={(e) => handleEmail(e.target.value)}
            className={`w-full h-12 p-3 ${
              !isEmailValid && email !== ""
                ? "border-red-600 focus:border-red-600"
                : "border-gray-400 focus:border-white"
            } bg-[#242A55] outline-none border rounded-md`}
            type="text"
          />

          {/* Error Icon with Tooltip */}
          {!isEmailValid && email !== "" && (
            <div
              className="absolute text-2xl text-red-600 right-0 top-12 mr-2 cursor-pointer"
              title="Invalid Email"
            >
              <BiSolidCommentError />
            </div>
          )}
        </div>

        {/* Password */}
        <div className="w-full flex flex-col gap-2 text-white">
          <span className="text-xl font-semibold">Password</span>
          <input
            className="w-full p-3 h-12 bg-[#242A55] outline-none border border-gray-400 focus:border-white rounded-md"
            type="password"
          />
        </div>

        {/* rePassword */}
        <div className="w-full flex flex-col gap-2 text-white">
          <span className="text-xl font-semibold">Confirm Password</span>
          <input
            className="w-full p-3 h-12 bg-[#242A55] outline-none border border-gray-400 focus:border-white rounded-md"
            type="password"
          />
        </div>
      </div>

      {/* Checkbox */}
      <div className="w-full h-auto flex items-center my-6">
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
          I accept the Terms and Conditions.
        </label>
      </div>

      {/* Signup Button */}
      <div className="w-full h-16 flex items-center">
        <button className="bg-[#4F65F1] w-full h-14 rounded-lg text-white">
          Signup
        </button>
      </div>

      {/* Login Navigation */}
      <div className="w-full h-auto flex justify-center pt-3 text-xl gap-2">
        <p className="text-[#818EAE]">Already have an account?</p>
        <span
          onClick={() => setIsLogin(false)}
          className="text-blue-500 font-semibold cursor-pointer"
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default Signup;
