import React from 'react';

function Letter({styles="", children}) {
    return (
        <li><div className={styles.letter}>{children}</div></li>
    )
}

export default Letter;