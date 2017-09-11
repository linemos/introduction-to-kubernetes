import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import DevTools from './devtools';
import reducer from '../reducer';

const isLocal = () => window.location.href.includes('localhost');

const create = (history) => {
    const composed = isLocal() ?
        compose(
            applyMiddleware(thunk, routerMiddleware(history)),
            DevTools.instrument()
        ) :
        compose(applyMiddleware(thunk, routerMiddleware(history)));

    return composed(createStore)(reducer, {});
};

export default create;
