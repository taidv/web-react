import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware  } from 'redux';
import { default as rootReducer, State }from './reducers'
import { App } from "./components/App";
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas';

// const store = createStore<State>(rootReducer, applyMiddleware(thunk));

const sagaMiddleware = createSagaMiddleware();
const store = createStore<State>(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('main')
);
