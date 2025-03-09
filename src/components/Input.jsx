import React from "react";
import { FaPlus } from "react-icons/fa6";

const Input = () => {
  return (
    <div className="flex items-center gap-2 m-7">

      <input
        type="text"
        className="border border-black focus:outline-none p-2 rounded-2xl flex-grow m-2"
        placeholder="Enter text..."
      />
     
    
     <div  className="w-[50px] h-[50px] flex items-center justify-center bg-amber-600  text-white  rounded-3xl text-xl  cursor-pointer">
     <FaPlus />
     </div>
    </div>
  );
};

export default Input;
