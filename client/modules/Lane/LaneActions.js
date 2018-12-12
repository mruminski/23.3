import callApi from "../../util/apiCaller";
import { normalize } from "normalizr";
import { createNotes } from "../Note/NoteActions";

export const CREATE_LANE = "CREATE_LANE";
export const UPDATE_LANE = "UPDATE_LANE";
export const DELETE_LANE = "DELETE_LANE";
export const EDIT_LANE = "EDIT_LANE";
export const CREATE_LANES = "CREATE_LANES";

// prettier-ignore
export function createLane(lane) {
  return {
    type: CREATE_LANE,
    lane: {
      notes: [],
      ...lane,
    }
  };
}

// prettier-ignore
export function updateLane(lane) {
  return {
    type: UPDATE_LANE,
    lane,
  };
}

// prettier-ignore
export function deleteLane(laneId) {
  return {
    type: DELETE_LANE,
    laneId,
  };
}

// prettier-ignore
export function editLane(laneId) {
  return {
    type: EDIT_LANE,
    laneId,
  };
}

// prettier-ignore
export function createLanes(lanesData) {
  return {
    type: CREATE_LANES,
    lanesData,
  };
}

// prettier-ignore
export function fetchLanes() {
  return (dispatch) => {
    return callApi("lanes").then(res => {
      const normalized = normalize(res.lanes, lanes);
      const { lanes: normalizedLanes } = normalized.entities;
      dispatch(createLanes(normalizedLanes));
      dispatch(createNotes(notes));
    });
  };
}

// prettier-ignore
export function createLaneRequest(lane) {
  return dispatch => {
    return callApi("lanes", "post", lane).then(res => {
      dispatch(createLane(res));
    });
  };
}

// prettier-ignore
export function deleteLaneRequest(laneId) {
  return dispatch => {
    return callApi("lanes", "delete", laneId).then(res => {
      dispatch(deleteLane(res));
    });
  };
}

// prettier-ignore
export function editLaneRequest(laneId) {
  return dispatch => {
    return callApi("lanes", "put", laneId).then(res => {
      dispatch(editLane(res));
    });
  };
}
