import React, { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import DoneAllIcon from "@mui/icons-material/DoneAll";

function Notes(props) {
  function hundleDelete() {
    props.onDelete(props.id);
  }

  const [newUserInput, setNewUserInput] = useState({
    title: props.title,
    content: props.content,
    bulean: true,
  });

  const [isEdit, setEdit] = useState(false);

  function hundleDone() {
    props.onUpdate(newUserInput, props.id);
    setEdit(false);
  }

  // console.log(newUserInput.updated);

  function hundleChange(e) {
    const { value, name } = e.target;
    setNewUserInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  // console.log(props.updated);

  return (
    <div className="note" key={props.id}>
      <div className="heading-card">
        <div className="date">
          {props.time} {props.bulean && props.updated}
        </div>
        <div className="icons">
          {isEdit ? (
            <DoneAllIcon className="done-icon" onClick={hundleDone} />
          ) : (
            <>
              {" "}
              <EditIcon
                className="edit-icon"
                onClick={() => {
                  setEdit(true);
                }}
              />
              <DeleteForeverIcon
                className="delete-icon"
                onClick={hundleDelete}
              />
            </>
          )}
        </div>
      </div>
      <div className="card-info">
        {isEdit ? (
          <>
            <input
              name="title"
              type="text"
              className="edit-input"
              value={newUserInput.title}
              onChange={hundleChange}
              placeholder="Title"
            />
            <textarea
              name="content"
              className="edit-area"
              value={newUserInput.content}
              onChange={hundleChange}
              placeholder="Description"
            ></textarea>
          </>
        ) : (
          <>
            {" "}
            <h2>{props.title}</h2>
            <p>{props.content}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Notes;
