import React from 'react';
import Letter from '../Letter/Letter';

function Phrase({children}) {
    return (
        <ol>
            <Letter>{children}</Letter>
        </ol>
    )
}

export default Phrase;