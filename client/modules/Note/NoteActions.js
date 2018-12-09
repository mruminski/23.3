import callApi from "../../util/apiCaller";

export const CREATE_NOTE = "CREATE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const CREATE_NOTES = "CREATE_NOTES";

// prettier-ignore
export function createNote(note, laneId) {
  return {
    type: CREATE_NOTE,
    laneId,
    note,
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

// prettier-ignore
export function createNotes(notesData) {
  return {
    type: CREATE_NOTES,
    notesData,
  };
}

// prettier-ignore
export function createNoteRequest(note, laneId) {
  return dispatch => {
    return callApi('notes', 'post', { note, laneId }).then(noteResp => {
      dispatch(createNote(noteResp, laneId));
    });
  };
}

// prettier-ignore
export function editNoteRequest(note) {
  return dispatch => {
    return callApi("notes", "put", note).then(res => {
      dispatch(editNote(res));
    });
  };
}

// prettier-ignore
export function deleteNoteRequest(noteId, laneId) {
  return dispatch => {
    return callApi("notes", "delete", noteId).then(res => {
      dispatch(deleteNote(res, laneId));
    });
  };
}
