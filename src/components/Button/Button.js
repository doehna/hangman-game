import React from 'react';

function Button({className="", ...delegated}) {
    return (
        <button className={className} {...delegated}>
        </button>
    )
}

export default Button;