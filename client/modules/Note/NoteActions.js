import uuid from "uuid";

export const CREATE_NOTE = "CREATE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";

// prettier-ignore
export function createNote(note, laneId) {
  return {
    type: CREATE_NOTE,
    laneId,
    note: {
      id: uuid(),
      ...note,
    },
  };
}

// prettier-ignore
export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    note,
  };
}

// prettier-ignore
export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId,
  };
}

// prettier-ignore
export function editNote(noteId) {
  return {
    type: EDIT_NOTE,
    noteId,
  };
}
