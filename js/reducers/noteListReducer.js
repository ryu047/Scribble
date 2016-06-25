import _ from 'lodash';
import constants from '../constants';
import NotesCollection from '../collections/notesCollection';
import NotesModel from '../models/notesModel';

let notes = function(state, action) {
  let tempNotes,
    newNote;

  switch (action.type) {

    case constants.ON_NOTE_CHANGE:
      tempNotes = new NotesCollection();
      let newModels = _.map(state.notes.models, model => {
        return new NotesModel(model.attributes);
      });
      tempNotes.set(newModels);
      newNote = tempNotes.find(note => {
        return note.id === action.oldNoteObject.id;
      });

      _.extend(action.changeItem, {d: +new Date()});
      let changePayload = _.extend({}, action.oldNoteObject.attributes, action.changeItem);

      newNote.save(changePayload);

      return Object.assign({}, state, {
        notes: tempNotes
      });

    case constants.ADD_NOTE:
      tempNotes = new NotesCollection();
      tempNotes.set(state.notes.models);
      newNote = tempNotes.createNew();

      return Object.assign({}, state, {
        notes: tempNotes,
        selectedNoteId: newNote.id
      });
      
    case constants.DELETE_NOTE:
      tempNotes = new NotesCollection();
      tempNotes.set(state.notes.models);

      let selectedNoteId;

      action.note.destroy();

      if(!state.notes.length){
        let newNote = tempNotes.createNew();
        selectedNoteId = newNote.id;
      } else {
        selectedNoteId = tempNotes.first().id
      }

      return Object.assign({}, state, {
        notes: tempNotes,
        selectedNoteId: selectedNoteId
      });

    case constants.DELETE_ALL_NOTES:
      tempNotes = new NotesCollection();
      tempNotes.set(state.notes.models);

      tempNotes.clearNotes();

      return Object.assign({}, state, {
        notes: tempNotes,
        selectedNoteId: tempNotes.first().id
      })
      

    case constants.LOAD_NOTE:
      return Object.assign({}, state, {
        selectedNoteId: action.selectedNoteId
      });

    default:
      return state;
  }
}

export default notes
