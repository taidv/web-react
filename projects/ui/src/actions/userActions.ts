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

    fetchCompanySuccess: (user: any): Action => ({
        type: "COMPANY SUCCESS",
        payload: {
            user: user
        }
    }),

    fetchCompanyFailure: (error: any): Action => ({
        type: ActionTypes.FETCH_FAILURE,
        payload: {
            error: error
        }
    }),

    // fetchUser: () => {

    //     return (dispatch: Dispatch<{}>) => {

    //         dispatch(UserActions.fetchBegin());

    //         return UserServices.getUser()
    //             .then(
    //                 user => dispatch(UserActions.fetchSuccess(user)), 
    //                 error => {
    //                     dispatch(UserActions.fetchFailure(error))
    //                 }
    //             )
    //     }
    // },



    fetchUser: () => {

        return (dispatch: Dispatch<{}>) => {

            dispatch(UserActions.fetchBegin());

            return UserServices.getUser()
                .then( res => {

                    const {user, error} = res;

                    if (!error && !!user) {
                        dispatch(UserActions.fetchSuccess(user))
                    } else {
                        dispatch(UserActions.fetchFailure(error))
                    }
                });
        }
    },

    fetchUserComplex: () => {

        return (dispatch: Dispatch<{}>) => {

            dispatch(UserActions.fetchBegin());

            return UserServices.getUser()
                .then( res => {

                    const {user, error} = res;

                    if (!error && !!user) {
                        dispatch(UserActions.fetchSuccess(user))
                        
                        UserServices.getCompany(user.companyId)
                            .then(res => {

                                const {company, error} = res;

                                !error && !!company
                                ? dispatch(UserActions.fetchCompanySuccess(company))
                                : dispatch(UserActions.fetchCompanyFailure(error))
                            })

                    } else {
                        dispatch(UserActions.fetchFailure(error))
                    }
                });
        }
    }
}
