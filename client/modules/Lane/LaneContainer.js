import { connect } from "react-redux";
import Lane from "./Lane";
import * as laneActions from "./LaneActions";
import { createNote } from "../Note/NoteActions";
import { DropTarget } from "react-dnd";
import ItemTypes from "../Kanban/itemTypes";
import { compose } from "redux";

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

// prtettier-ignore
const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const { id: noteId, laneId: sourceLaneId } = sourceProps;

    if (!targetProps.lane.notes.lenght) {
      targetProps.moveBetweenLanes(targetProps.lane.id, noteId, sourceLaneId);
    }
  }
};

// prettier-ignore
const mapDispatchToProps = {
  ...laneActions,
  addNote: createNote,
  createLane: laneActions.createLaneRequest,
  editLane: laneActions.editLaneRequest,
  deleteLane: laneActions.deleteLaneRequest,
  moveBetweenLanes: laneActions.moveBetweenLanes,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  DropTarget(ItemTypes.NOTE, noteTarget, dragConnect => ({
    connectDropTarget: dragConnect.dropTarget()
  }))
)(Lane);
