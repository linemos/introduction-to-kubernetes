import fetch from 'isomorphic-fetch';
import { getConfig } from './utils';

const GET_WORK_EXPERIENCE_SUCCESS = 'GET_WORK_EXPERIENCE_SUCCESS';

export default function reducer(state = { rows: undefined }, action) {
    switch (action.type) {
        case GET_WORK_EXPERIENCE_SUCCESS:
            return { ...state, rows: action.result };
        default:
            return state;
    }
}

export const getWorkExperience = () =>
    dispatch =>
        fetch('/api/work', getConfig)
            .then(
                response => {
                    if (response.status >= 400) {
                        throw new Error();
                    }
                    return response.json();
                })
            .then(json =>
                dispatch({
                    type: GET_WORK_EXPERIENCE_SUCCESS,
                    result: json
                }),
            )
            .catch(error => console.log(error));