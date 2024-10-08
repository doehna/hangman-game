import React from "react";
import styles from "./RoundButton.module.css"
import Button from "../Button/Button";

function RoundButton({iconSrc, alt, imgStyles, buttonStyles, ...delegated}) {
    return <Button className={`gradient ${styles.roundButton} ${buttonStyles}`} {...delegated}>
        <img src={iconSrc} alt={alt} className={imgStyles} />
        </Button>
}

export default RoundButton;