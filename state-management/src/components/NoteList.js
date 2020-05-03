import React, { useState, useContext } from 'react';
import Note from './Note';
import { NoteContext } from './NoteContext';

const NoteList = () => {
    const [notes, setNotes] = useContext(NoteContext)
    return(
        <div>
            {notes.map(card => (
                <Note title={card.title} note={card.note} key={card.id} />
            ))}
        </div>
    );
}

export default NoteList;