import fetch from 'isomorphic-fetch';

const GET_CONTACT_INFORMATION_SUCCESS = 'GET_CONTACT_INFORMATION_SUCCESS';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_CONTACT_INFORMATION_SUCCESS:
            return { ...state, ...action.result };
        default:
            return state;
    }
}

const config = {
    method: 'GET',
    credentials: 'same-origin'
};

export const getContactInformation = () =>
    dispatch =>
        fetch('/api/me', config)
            .then(
                response => {
                    if (response.status >= 400) {
                        // dispatch({ type: status.FAILURE });
                    }
                    return dispatch(
                        {
                            type: GET_CONTACT_INFORMATION_SUCCESS,
                            result: response.json()
                        });
                },
                error => console.log('An error occured.', error)
            );