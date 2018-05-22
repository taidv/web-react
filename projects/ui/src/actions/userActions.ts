import { Dispatch } from 'react-redux';
import { UserServices } from '../services/users';
import { Action } from './baseAction';

export const ActionTypes = {
    FETCH_BEGIN: '@@HRBC/USER__FETCH_BEGIN',
    FETCH_SUCCESS: '@@HRBC/USER__FETCH_SUCCESS',
    FETCH_FAILURE: '@@HRBC/USER__FETCH_FAILURE',
};

export const UserActions = {
    fetchBegin: (): Action => ({
        type: ActionTypes.FETCH_BEGIN,
        payload: {},
    }),

    fetchSuccess: (user: any): Action => ({
        type: ActionTypes.FETCH_SUCCESS,
        payload: {
            user: user,
        },
    }),

    fetchFailure: (error: any): Action => ({
        type: ActionTypes.FETCH_FAILURE,
        payload: {
            error: error,
        },
    }),

    fetchCompanySuccess: (user: any): Action => ({
        type: 'COMPANY SUCCESS',
        payload: {
            user: user,
        },
    }),

    fetchCompanyFailure: (error: any): Action => ({
        type: ActionTypes.FETCH_FAILURE,
        payload: {
            error: error,
        },
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

            return UserServices.getUser().then(response => {
                const { user, error } = response;

                if (!error && !!user) {
                    dispatch(UserActions.fetchSuccess(user));
                } else {
                    dispatch(UserActions.fetchFailure(error));
                }
            });
        };
    },

    fetchUserComplex: () => {
        return (dispatch: Dispatch<{}>) => {
            dispatch(UserActions.fetchBegin());

            return UserServices.getUser().then(response => {
                const { user, error } = response;

                if (!error && !!user) {
                    dispatch(UserActions.fetchSuccess(user));

                    UserServices.getCompany(user.companyId).then(res => {
                        !res.error && !!res.company
                            ? dispatch(UserActions.fetchCompanySuccess(res.company))
                            : dispatch(UserActions.fetchCompanyFailure(res.error));
                    });
                } else {
                    dispatch(UserActions.fetchFailure(error));
                }
            });
        };
    },
};
