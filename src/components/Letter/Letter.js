import React from "react";

function Letter({ className = "", children, isHidden = false }) {
  return (
    <div
      className={`${className} ${isHidden && "hidden"} ${
        children === " " && "empty"
      }`}
    >
      {!isHidden ? children : ""}
    </div>
  );
}

export default Letter;
