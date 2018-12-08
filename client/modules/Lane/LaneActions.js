import uuid from "uuid";

export const CREATE_LINE = "CREATE_LINE";
export const UPDATE_LINE = "UPDATE_LINE";
export const DELETE_LINE = "DELETE_LINE";
export const EDIT_LINE = "EDIT_LANE";

// prettier-ignore
export function createLine(lane) {
  return {
    type: CREATE_LINE,
    lane: {
      id: uuid(),
      notes: [],
      ...lane,
    }
  };
}

// prettier-ignore
export function updateLine(lane) {
  return {
    type: UPDATE_LINE,
    lane,
  };
}

// prettier-ignore
export function deleteLine(laneId) {
  return {
    type: DELETE_LINE,
    laneId,
  };
}

// prettier-ignore
export function editLine(laneId) {
  return {
    type: EDIT_LINE,
    laneId,
  };
}
