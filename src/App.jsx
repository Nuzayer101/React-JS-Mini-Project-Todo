import React from "react";
import Input from "./components/Input";

const App = () => {
  return (
    <div className="!bg-black h-screen p-3 w-[1350px]">
      <div className="bg-white shadow-2xl min-h-[400px] max-w-[750px] mx-auto  rounded-2xl">
        <h1 className="text-center  text-4xl uppercase mt-2 font-medium">to-do-app</h1>
      <Input></Input>
      </div>
    </div>

  );
};

export default App;
