import React from 'react';
import styles from "./Button.module.css";

function Button({className="", id, children, ...delegated}) {
    return (
        <button id={id} className={`${styles.button} ${className}`} {...delegated}>
            {children}
        </button>
    )
}

export default Button;