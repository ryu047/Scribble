import constants from "./constants"

export default {

  onNoteChange: (changeItem, oldNoteObject) => {
    return {
      changeItem,
      oldNoteObject,
      type: constants.ON_NOTE_CHANGE
    };
  },

  onNoteClick: selectedNoteId => {
    return {
      type: constants.LOAD_NOTE,
      selectedNoteId: selectedNoteId
    };
  },

  addNote: () => {
    return {
      type: constants.ADD_NOTE
    };
  },

  deleteNote: note => {
    return {
      type: constants.DELETE_NOTE,
      note
    };
  },

  deleteAllNotes: () => {
    return {
      type: constants.DELETE_ALL_NOTES
    };
  }
};
