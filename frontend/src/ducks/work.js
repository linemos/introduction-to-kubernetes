import fetch from 'isomorphic-fetch';

const GET_WORK_EXPERIENCE_REQUEST = 'GET_WORK_EXPERIENCE_REQUEST';

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_WORK_EXPERIENCE_SUCCESS:
            return { ...state, ...action.result };
        default:
            return state;
    }
}

export const getWorkExperience = () =>
    dispatch =>
        fetch('/api/education', config)
            .then(
                response => {
                    if (response.status >= 400) {
                        // dispatch({ type: status.FAILURE });
                    }
                    return dispatch(
                        {
                            type: GET_WORK_EXPERIENCE_SUCCESS,
                            result: response.json()
                        });
                },
                error => console.log('An error occured.', error)
            );
