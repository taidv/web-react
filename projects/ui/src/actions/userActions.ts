import { Action } from './baseAction';
import { Dispatch } from 'react-redux';

export const ActionTypes = {
    FETCH_BEGIN: '@@HRBC/USER__FETCH_BEGIN',
    FETCH_SUCCESS: '@@HRBC/USER__FETCH_SUCCESS',
    FETCH_FAILURE: '@@HRBC/USER__FETCH_FAILURE'
}

export const UserActions = {

    fetchBegin: (): Action => ({
        type: ActionTypes.FETCH_BEGIN,
        payload: {}
    }),

    fetchSuccess: (user: any): Action => ({
        type: ActionTypes.FETCH_SUCCESS,
        payload: {
            user: user
        }
    }),

    fetchFailure: (error: any): Action => ({
        type: ActionTypes.FETCH_FAILURE,
        payload: {
            error: error
        }
    }),

    fetchUser: () => {
        return (dispatch: Dispatch<{}>) => {
            dispatch(UserActions.fetchBegin());
            return fetch('/api/users')
                .then(
                    response => {
                        if (response.status == 200) {
                            return response.json()
                        } else {
                            dispatch(UserActions.fetchFailure('Not found!'))
                        }
                    }, 
                    error => {
                        console.log('An error occurred', error)
                        dispatch(UserActions.fetchFailure(error))
                    }
                )
                .then(user =>
                    dispatch(UserActions.fetchSuccess(user))
                )
        }
    }
}
