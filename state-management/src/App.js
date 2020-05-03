import React from 'react';
import './App.css';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import { NoteProvider } from './components/NoteContext';
import Nav from './components/Nav';

function App() {
  return (
    <NoteProvider>
      <div className="App">
        <Nav />
        <AddNote />
        <NoteList />
      </div>
    </NoteProvider>
  );
}

export default App;
