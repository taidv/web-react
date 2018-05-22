import { call, put, take } from 'redux-saga/effects';
import { UserActions, UserActionTypes } from '../actions';
import { UserServices, } from '../services/users';


function* loadUser() {
    
    const { user, error} = yield call(UserServices.getUser);

    !!user && !error
    ? yield put(UserActions.fetchSuccess(user))
    : yield put(UserActions.fetchFailure(error));
}

function* loadSearches() {
    
    while(true) {
        const { payload } = yield take(UserActionTypes.FETCH_SUCCESS);
        const { company, error} = yield call(UserServices.getCompany, payload.user.id);

        !!company && !error
        ? yield put(UserActions.fetchSuccess(company))
        : yield put(UserActions.fetchFailure(error));
    }
}