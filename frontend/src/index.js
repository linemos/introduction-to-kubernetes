import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import createReduxStore from './store/index';
import App from './app/app';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
const store = createReduxStore();

render(
    (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/" component={App} />
            </BrowserRouter>
        </Provider>
    ),
    document.getElementById('root')
);
registerServiceWorker();