import React, { useState, useContext } from 'react';
import { NoteContext } from './NoteContext';

const AddNote = () => {
    const [title, setTitle] = useState('')
    const [note, setNote] = useState('')
    const [notes, setNotes] = useContext(NoteContext);

    const updateTitle = (e) => {
        setTitle(e.target.value);
    }
    
    const updateNote = (e) => {
        setNote(e.target.value);
    }

    const addNote = (e) => {
        e.preventDefault();
        setNotes(prevNotes => [...prevNotes, {title: title, note: note}]);
    }

    return(
        <form onSubmit={addNote}>
            <h2>Add a Note</h2>
            Title:
            <input type="text" title="title" value={title} onChange={updateTitle} />
            Note:
            <input type="textarea" note="note" value={note} onChange={updateNote} />
            <button>Add Note!</button>
        </form>
    )
}

export default AddNote;