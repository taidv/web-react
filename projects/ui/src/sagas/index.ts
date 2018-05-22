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
    const { payload } = yield take(UserActionTypes.FETCH_SUCCESS);
    const { company, error } = yield call(UserServices.getCompany, payload.user.id);

    !!company && !error ? yield put(UserActions.fetchSuccess(company)) : yield put(UserActions.fetchFailure(error));
}

function* rootSaga() {
    yield fork(loadUser);
    //  [

    //     // watchers
    //     // takeEvery(UserActionTypes.FETCH_BEGIN, loadUser),
    //     fork(loadUser),

    //     // init load
    //     // put(UserActions.fetchBegin()),

    // ];
}

export { rootSaga, loadUser, loadSearches };
