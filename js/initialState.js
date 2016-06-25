import NotesCollection from './collections/notesCollection';

let notes = new NotesCollection();

let initialState = () => {
  notes.fetch();

  return {
    notes: notes,
    selectedNoteId: notes.first().id
  };
};

export default initialState;
