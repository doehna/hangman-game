import React from "react";
import styles from "./Letter.module.css"

function Letter({ className = "", children, isHidden = false }) {
  return (
    <div
      className={`${className} ${isHidden && styles.hidden} ${children === " " && styles.empty}`}
    >
      {!isHidden ? children : ""}
    </div>
  );
}

export default Letter;
