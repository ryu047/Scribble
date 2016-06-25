import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';


let newBtnStyle = {
  position: 'absolute',
  bottom: '10px',
  right: '10px'
};

let NotePage = React.createClass({

  render(){
    let props = this.props,
      note = props.note;

    return (
      <section className="noteBook">

        <TextField
          ref="title"
          fullWidth={true} className="noteTitle" hintText="Title"
          value={note.get('t')}
          onChange={e => {
            props.onNoteChange({
              t: e.target.value
            }, note);
          }}
          />

        <TextField
          ref="content"
          hintText="Content" fullWidth={true} multiLine={true} rows={6}
          className="noteText"
          value={note.get('c')}
          onChange={e => {
            props.onNoteChange({
              c: e.target.value
            }, note);
          }}
          />

        <FloatingActionButton backgroundColor={'#4b4b4b'} style={newBtnStyle} className="newNoteBtn" onClick={() => props.addNote()}>
          <ContentAdd />
        </FloatingActionButton>

      </section>
    );
  }
});

let mapStateToProps = state => {
  return {
    note: state.notes.find(note  => note.get('id') === state.selectedNoteId)
  };
};

let mapDispatchToProps = dispatch => {
  return {
    onNoteChange: (changeItem, oldNoteObject) => dispatch(actions.onNoteChange(changeItem, oldNoteObject)),

    addNote: () => dispatch(actions.addNote())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NotePage);


