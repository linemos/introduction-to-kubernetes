import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import contactInformation from './ducks/contact-information';
import education from './ducks/education';
import work from './ducks/work';

export default combineReducers({
    routing,
    contactInformation,
    education,
    work
});
