import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/lib/paper';

import NotePage from './notePage.js';
import NoteList from './noteList.js';

let Notebook = () => {
  return (
    <Paper className="notebook-container" zDepth={2}>
      <NotePage/>
      <NoteList/>
    </Paper>
  );
};

export default Notebook;
