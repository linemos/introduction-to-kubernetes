import fetch from 'isomorphic-fetch';

const GET_EDUCATION_SUCCESS = 'GET_EDUCATION_SUCCESS';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_EDUCATION_SUCCESS:
            return { ...state, ...action.result };
        default:
            return state;
    }
}

export const getEducation = () =>
    dispatch =>
        fetch('/api/education', config)
            .then(
                response => {
                    if (response.status >= 400) {
                        // dispatch({ type: status.FAILURE });
                    }
                    return dispatch(
                        {
                            type: GET_EDUCATION_SUCCESS,
                            result: response.json()
                        });
                },
                error => console.log('An error occured.', error)
            );
