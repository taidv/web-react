import { Action } from './baseAction';
import { Dispatch } from 'react-redux';
import { UserServices } from '../services/users';

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

    fetchUser2: () => {

        return (dispatch: Dispatch<{}>) => {

            dispatch(UserActions.fetchBegin());

            return UserServices.getUser()
                .then(
                    user => dispatch(UserActions.fetchSuccess(user)), 
                    error => {
                        dispatch(UserActions.fetchFailure(error))
                    }
                )
        }
    }
}
