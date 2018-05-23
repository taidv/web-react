import * as React from 'react';
import { render } from 'react-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { App } from './components/App';
import { appLocales, DEFAULT_LOCALE, translationMessages } from './i18n';
import { default as rootReducer, State } from './reducers';

const store = createStore<State>(rootReducer);

// tslint:disable-next-line:no-console
console.log(translationMessages);

const locale = DEFAULT_LOCALE;
const messages = translationMessages[locale];

render(
    <Provider store={store}>
        <IntlProvider locale={locale} messages={messages}>
            <Router>
                <Route path="/" component={App} />
            </Router>
        </IntlProvider>
    </Provider>,
    document.getElementById('main')
);
