import { call, fork, put, take } from 'redux-saga/effects';
// import { loadUser } from './user';
import { UserActions, UserActionTypes } from '../actions';
import { UserServices } from '../services/users';

function* loadUser() {
    while (true) {
        yield take(UserActionTypes.FETCH_BEGIN);
        const { user, error } = yield call(UserServices.getUser);

        !!user && !error ? yield put(UserActions.fetchSuccess(user)) : yield put(UserActions.fetchFailure(error));
    }
}

function* loadSearches() {
    while (true) {
        const { payload } = yield take(UserActionTypes.FETCH_SUCCESS);
        const { company, error } = yield call(UserServices.getCompany, payload.user.name);

        !!company && !error ? yield put(UserActions.fetchSuccess(company)) : yield put(UserActions.fetchFailure(error));
    }
}

function* rootSaga() {
    yield fork(loadUser);
    yield fork(loadSearches);
    //  [

    //     // watchers
    //     // takeEvery(UserActionTypes.FETCH_BEGIN, loadUser),
    //     fork(loadUser),

    //     // init load
    //     // put(UserActions.fetchBegin()),

    // ];
}

export { rootSaga, loadUser, loadSearches };
