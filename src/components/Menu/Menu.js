import React from "react";
import styles from "./Menu.module.css";

function Menu({ headingSrc, alt, imgClassName, menuClassName, wrapperClassName, children }) {
  return (
      <div className={`${styles.menuWrapper} ${wrapperClassName}`}>
        <img
          alt={alt}
          src={headingSrc}
          className={imgClassName}
        ></img>
        <div className={`${styles.menu} ${menuClassName}`} >{children}</div>
      </div>
  );
}

export default Menu;
