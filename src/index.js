import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reduxPromise from 'redux-promise';
import reduxMulti from 'redux-multi';
import reduxThunk from 'redux-thunk';

import AuthOrApp from './main/AuthOrApp';
import reducers from './main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(reduxPromise, reduxMulti, reduxThunk)(createStore)(reducers, devTools);

ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>
, document.getElementById('root'));