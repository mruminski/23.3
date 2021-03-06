import React from "react";
import PropTypes from "prop-types";
import Note from "./Note";
import Edit from "../../components/edit";
import style from "./Note.css";

const Notes = ({
  notes,
  laneId,
  editNote,
  updateNote,
  deleteNote,
  moveWithinLane
}) => {
  return (
    <ul className="notes">
      {notes.map(note => (
        <Note
          id={note.id}
          key={note.id}
          moveWithinLane={moveWithinLane}
          laneId={laneId}
        >
          <Edit
            editing={note.editing}
            value={note.task}
            onValueClick={() => editNote(note.id)}
            onUpdate={task => updateNote({ ...note, task, editing: false })}
            onDelete={() => deleteNote(note.id, laneId)}
          />
        </Note>
      ))}
    </ul>
  );
};

// prettier-ignore
Notes.propTypes = {
  notes: PropTypes.array,
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func,
  editNote: PropTypes.func,
  laneId: PropTypes.string,
  moveWithinLane: PropTypes.func,
};

export default Note;
