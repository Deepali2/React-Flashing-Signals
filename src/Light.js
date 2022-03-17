import React from "react";

const Light = ({ color, active }) => {
  return (
    <div
      className="circle"
      style={{ backgroundColor: color, opacity: active ? 1 : 0.1 }}
    ></div>
  );
};
export default Light;