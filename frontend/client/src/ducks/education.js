import fetch from 'isomorphic-fetch';
import { getConfig } from './utils';

const GET_EDUCATION_SUCCESS = 'GET_EDUCATION_SUCCESS';

export default function reducer(state = { rows: undefined }, action) {
    switch (action.type) {
        case GET_EDUCATION_SUCCESS:
            return { ...state, rows: action.result };
        default:
            return state;
    }
}

export const getEducation = () =>
    dispatch =>
        fetch('/api/education', getConfig)
            .then(
                response => {
                    if (response.status >= 400) {
                        throw new Error();
                    }
                    return response.json();
                })
            .then(json =>
                dispatch({
                    type: GET_EDUCATION_SUCCESS,
                    result: json
                }),
            )
            .catch(error => console.log(error));