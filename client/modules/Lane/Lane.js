import React, { PropTypes } from "react";
import NotesContainer from "../Note/NoteContainer";
import styles from "./Lane.css";
import Edit from "../../components/edit";

const Lane = props => {
  const { lane, laneNotes, addNote, editLane, updateLane, deleteLane } = props;
  const laneId = lane.id;

  return (
    <div className={styles.Lane}>
      <div className={styles.LaneHeader}>
        <div className={styles.LaneAddNote}>
          <button onClick={() => addNote({ task: `New Note` }, laneId)}>
            Add Note
          </button>
        </div>
        <Edit
          className={styles.LaneName}
          editing={lane.editing}
          value={lane.name}
          onValueClick={() => editLane(lane.id)}
          onUpdate={name => updateLane({ ...lane, name, editing: false })}
        />
        <div className={styles.LaneDelete}>
          <button onClick={() => deleteLane(laneId)}>Remove Lane</button>
        </div>
      </div>
      <NotesContainer notes={laneNotes} laneId={laneId} />
    </div>
  );
};

// prettier-ignore
Lane.propTypes = {
  // lane: PropTypes.object,
  // laneNotes: PropTypes.array,
  // addNote: PropTypes.func,
  // editLane: PropTypes.func,
  // updateLane: PropTypes.func,
  // deleteLane: PropTypes.func,
};

export default Lane;
