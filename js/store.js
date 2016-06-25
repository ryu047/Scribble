import { createStore } from 'redux'
import noteListReducer from './reducers/noteListReducer'
import initialState from './initialState'

module.exports = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(noteListReducer, initialState());
