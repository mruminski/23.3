// prettier-ignore
import {
  CREATE_LINE,
  UPDATE_LINE,
  DELETE_LINE,
  EDIT_LINE,
} from "./LaneActions";
import { CREATE_NOTE, DELETE_NOTE } from "../Note/NoteActions";

const initialState = {};

export default function lanes(state = initialState, action) {
  switch (action.type) {
    case CREATE_LINE:
      return [...state, action.lane];
    case UPDATE_LINE:
      return state.map(lane => {
        return lane.id === action.id ? { ...lane, ...action.lane } : lane;
      });
    case DELETE_LINE:
      return state.filter(lane => lane.id !== action.laneId);
    case EDIT_LINE:
      return state.map(lane => {
        return lane.id === action.id ? { ...lane, editing: true } : lane;
      });
    case CREATE_NOTE:
      return state.map(lane => {
        if (lane.id === action.laneId) {
          const notes = [...lane.notes, action.note.id];
          return [...lane, notes];
        }
        return lane;
      });
    case DELETE_NOTE:
      return state.map(lane => {
        if (lane.id === action.laneId) {
          const notes = lane.notes
            ? lane.notes.filter(note => note.id !== action.note.id)
            : [];
          return [...lane, notes];
        }
        return lane;
      });

    default:
      return state;
  }
}
