import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; //pass store/props down to components
//middleware: a tunnel that action go through, which can moddify or trigger actions
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger'; //logging actions
//handle async actions that returns functions instead of objects
import thunkMiddleware from 'redux-thunk'; 
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots, requestRobots} from './reducers';
import 'tachyons'; 

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
//discribe state of app, so react can render, make change and show to user
const store = 
	createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
	<Provider store={store}>
	  <App  />
	</Provider>  , document.getElementById('root'));
registerServiceWorker();
