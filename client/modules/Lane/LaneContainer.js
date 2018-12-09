import { connect } from "react-redux";
import Lane from "./Lane";
import * as laneActions from "./LaneActions";
import { createNote } from "../Note/NoteActions";

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

// prettier-ignore
const mapDispatchToProps = {
  ...laneActions,
  addNote: createNote,
  createLane: laneActions.createLaneRequest,
  editLane: laneActions.editLaneRequest,
  deleteLane: laneActions.deleteLaneRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);
