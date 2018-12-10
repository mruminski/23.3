import { connect } from "react-redux";
import Notes from "./Notes";
import * as noteActions from "../Note/NoteActions";

// prettier-ignore
const mapDispatchToProps = {
  onValueClick: noteActions.editNote,
  updateNote: noteActions.editNoteRequest,
  deleteNote: noteActions.deleteNoteRequest,
  moveWithinLane: noteActions.moveWithinLane,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);
