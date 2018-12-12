import { connect } from "react-redux";
import Notes from "./Notes";
import { editLane, deleteLane, updateLane } from "./LaneActions";
import * as noteActions from "../Note/NoteActions";

// prettier-ignore
const mapDispatchToProps = {
  editLane,
  deleteLane,
  updateLane,
  addNote: noteActions.createNoteRequest,
  updateNote: noteActions.editNoteRequest,
  deleteNote: noteActions.deleteNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
