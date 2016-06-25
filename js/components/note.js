import React, { PropTypes } from 'react'
import ListItem from 'material-ui/lib/lists/list-item';
import Colors from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';


const iconButtonElement = (
  <IconButton>
    <MoreVertIcon color={Colors.grey400}/>
  </IconButton>
);

const listItemStyle = {
  padding: '0px !important',
  'paddingLeft': '10px',
  'fontSize': '14px',
  'backgroundColor': 'white'
};

const getStyle = function (index) {
  return {
    'top': (index * -15) + 'px'
  }
};

const Note = props => {
  let noteData = props.note,
    rightIconMenu = React.createElement(IconMenu, {
      onNoteDelete: props.onNoteDelete,
      iconButtonElement: iconButtonElement
    }, <MenuItem onClick={ () => props.onNoteDelete(noteData)}>Delete</MenuItem>);

  return (
    <div className="noteItemWrap" style={getStyle(props.index)}>
      <ListItem style={listItemStyle} className="noteItem"
                onClick={props.onNoteClick.bind(this, noteData.get('id'))}
                rightIconButton={rightIconMenu} primaryText={noteData.get('t')}
                secondaryText={<span className="noteText">{noteData.get('c')}</span>}
                secondaryTextLines={2}>
        <div className="noteTime">{noteData.getDate()}</div>
      </ListItem>
    </div>
  )
};

export default Note;
