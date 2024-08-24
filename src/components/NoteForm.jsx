import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { Update } from "@mui/icons-material";

function NotesForm(props) {
  const [isEmpty, setEmpty] = useState(true);

  const [inputUser, setInputUser] = useState({
    title: "",
    content: "",
  });

  const newValue = {
    id: crypto.randomUUID(),
    title: inputUser.title,
    content: inputUser.content,
    time: new Date().toDateString(),
    updated: "(Edited)",
    bulean: false,
  };

  function hundleChange(e) {
    const { value, name } = e.target;

    setInputUser((preventValue) => ({
      ...preventValue,
      [name]: value,
    }));
  }

  function addNote(e) {
    const emptyField =
      inputUser.title.trim() === "" || inputUser.content.trim() === "";
    if (emptyField) {
      return;
    }

    props.onNote(newValue);
    setInputUser({ title: "", content: "" });
    setEmpty(true);
  }
  function newNote() {
    return (
      <>
        <header className="header">
          <h1>
            <NoteAddIcon className="icon-title" />
            Note
          </h1>
          <button
            onClick={() => {
              setEmpty(false);
            }}
          >
            Create a Note
          </button>
        </header>

        <div className="create-contianer">
          <div className="new-note">
            <AddIcon
              className="add-btn"
              onClick={() => {
                setEmpty(false);
              }}
            />
          </div>
        </div>
      </>
    );
  }

  function note() {
    return (
      <>
        <header className="header">
          <h1>
            <ArrowBackIcon
              className="back"
              onClick={() => {
                setEmpty(true);
              }}
            />
            New note
          </h1>
          <button onClick={addNote}>Add note</button>
        </header>
        <div className="create-contianer">
          <form>
            <input
              type="text"
              name="title"
              maxLength="30"
              onChange={hundleChange}
              value={inputUser.title}
              placeholder="Type your title"
            />
            <textarea
              name="content"
              maxLength="150"
              rows="5"
              onChange={hundleChange}
              value={inputUser.content}
              placeholder="What's the note today?"
            ></textarea>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <>{isEmpty ? newNote() : note()}</>;
    </>
  );
}

export default NotesForm;
