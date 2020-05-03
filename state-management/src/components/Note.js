import React from 'react';

const Note = ({ title, note }) => {
    return(
        <div>
            <h3>{title}</h3>
            <p>{note}</p>
        </div>
    )
}

export default Note;