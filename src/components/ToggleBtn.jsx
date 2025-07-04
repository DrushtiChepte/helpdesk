import React, { useState } from "react";

const ToggleSwitch = () => {
  const [selected, setSelected] = useState("BM");

  return (
    <div className="flex w-fit bg-primary rounded-md border overflow-hidden text-sm font-bold">
      <button
        onClick={() => setSelected("BM")}
        className={`px-4 py-1 transition-colors duration-200 ${
          selected === "BM" ? "bg-black text-white" : "bg-primary text-black"
        }`}
      >
        BM
      </button>
      <button
        onClick={() => setSelected("BI")}
        className={`px-4 py-1 transition-colors duration-200 ${
          selected === "BI" ? "bg-black text-white" : "bg-primary text-black"
        }`}
      >
        BI
      </button>
    </div>
  );
};

export default ToggleSwitch;
