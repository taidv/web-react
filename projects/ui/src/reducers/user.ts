import { Action, UserActionTypes as Types } from '../actions';
import { UserServices } from '../services/users';

export type UserState = {
    id: number,
    name: string,
    isLoading: boolean,
    hasError: boolean
};

const initState = {
    id: 0,
    name: "",
    isLoading: false,
    hasError: false
}

const fetchBegin = (state: UserState): UserState => {
    return Object.assign({}, state, { isLoading: true });
}

const fetchSucess = (state: UserState, user: any): UserState => {
    return Object.assign({}, state, {
        id: user.id || 0,
        name: user.name || "",
        isLoading: false
    });
}

const fetchFailure = (state: UserState): UserState => {
    return Object.assign({}, state, { isLoading: false, hasError: true });
}

const user = (state: UserState = initState, action: Action): UserState => {

    let payload = action.payload;

    console.log(state, action);

    switch (action.type) {
        case Types.FETCH_SUCCESS:
            return fetchSucess(state, payload.user);
        case Types.FETCH_BEGIN:
            return fetchBegin(state);
        case Types.FETCH_FAILURE:
            return fetchFailure(state);
        default:
            return state;
    }
};

export default user;