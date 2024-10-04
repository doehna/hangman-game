import React from "react";

function Letter({ styles = "", children, isHidden=false }) {
  return <div className={`${styles.letter} ${children === " " && styles.empty}`}>{!isHidden ? children : ""}</div>;
}

export default Letter;
