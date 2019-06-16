import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import AppUseReducer from './components/AppUseReducer';
import "./style/main.scss";

render(<App />, document.getElementById('app'));
render(<AppUseReducer />, document.getElementById('app'));

