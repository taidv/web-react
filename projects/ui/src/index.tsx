import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware  } from 'redux';
import { default as rootReducer, State }from './reducers'
import { App } from "./components/App";
import thunk from 'redux-thunk';


const store = createStore<State>(rootReducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('main')
);
