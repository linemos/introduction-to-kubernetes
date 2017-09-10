import fetch from 'isomorphic-fetch';
import { getConfig } from './utils';

const GET_CONTACT_INFORMATION_SUCCESS = 'GET_CONTACT_INFORMATION_SUCCESS';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_CONTACT_INFORMATION_SUCCESS:
            return { ...state, ...action.result };
        default:
            return state;
    }
}

export const getContactInformation = () =>
    dispatch =>
        fetch('/api/me', getConfig)
            .then(
                response => {
                    if (response.status >= 400) {
                        throw new Error();
                    }
                    return response.json();
                })
                .then(json =>
                        dispatch({
                            type: GET_CONTACT_INFORMATION_SUCCESS,
                            result: json
                        }),
            );