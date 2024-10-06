import React from "react";

function Letter({ styles = "", children, isHidden=false }) {
  return <div className={`${styles.letter} ${isHidden && styles.hidden} ${children === " " && styles.empty}`}>{!isHidden ? children : ""}</div>;
}

export default Letter;
