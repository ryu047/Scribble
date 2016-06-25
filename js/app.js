import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Notebook from './components/notebook'
import store from './store'
import Styles from '../less/main.less';
import Utils from './utils.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render(
  <Provider store={store}>
    <Notebook />
  </Provider>,
  document.getElementById('app')
)