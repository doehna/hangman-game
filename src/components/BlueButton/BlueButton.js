import React from "react";
import Button from "../Button/Button";

function BlueButton({className, children, ...delegated}) {
    return <Button className={`blueRectangle ${className}`} {...delegated}>
        {children}
        </Button>
}

export default BlueButton;