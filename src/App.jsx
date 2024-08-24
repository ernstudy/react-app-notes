import { useEffect, useState } from "react";
import Notes from "./components/Notes";
import NoteForm from "./components/NoteForm";
import "./components/styles.css";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    const temp = [...notes];
    temp.unshift(newNote);
    setNotes(temp);
    inLocalStorage(temp);
  }

  function inLocalStorage(newNotes) {
    localStorage.setItem("notes", JSON.stringify(newNotes));
  }

  useEffect(() => {
    const notesArray = JSON.parse(localStorage.getItem("notes"));
    if (notesArray) {
      setNotes(notesArray);
    }
  }, []);

  function emptyDocument() {
    if (notes.length === 0) {
      return <h2 className="no-note">There is no note yet</h2>;
    }
  }

  function deleteNote(newId) {
    const temp = notes.filter((note) => note.id !== newId);
    setNotes(temp);
    inLocalStorage(temp);
  }

  function updateNote(newNote, id) {
    const temp = [...notes];
    const note = temp.find((note) => note.id === id);
    note.title = newNote.title;
    note.content = newNote.content;
    note.bulean = newNote.bulean;
    setNotes(temp);
    inLocalStorage(temp);
  }

  return (
    <>
      <NoteForm onNote={addNote} onNewNote={updateNote} />

      <div className="notes">
        {emptyDocument()}
        {/* {console.log(note.bulean)} */}

        {notes.map((note) => {
          console.log(note.bulean);
          return (
            <Notes
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              time={note.time}
              onDelete={deleteNote}
              onUpdate={updateNote}
              updated={note.updated}
              bulean={note.bulean}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
