import { Action, UserActionTypes as Types } from '../actions';

export type UserState = {
    id: number;
    name: string;
    isLoading: boolean;
    error?: string;
};

const initState = {
    id: 0,
    name: '',
    isLoading: false,
};

const fetchBegin = (state: UserState): UserState => {
    return Object.assign({}, state, { isLoading: true });
};

const fetchSucess = (state: UserState, usr: any): UserState => {
    return Object.assign({}, state, {
        id: usr.id || 0,
        name: usr.name || '',
        isLoading: false,
    });
};

const fetchFailure = (state: UserState, error: string): UserState => {
    return Object.assign({}, state, { isLoading: false, error: error });
};

const user = (state: UserState = initState, action: Action): UserState => {
    const payload = action.payload;

    // console.log(state, action);

    switch (action.type) {
        case Types.FETCH_SUCCESS:
            return fetchSucess(state, payload.user);
        case Types.FETCH_BEGIN:
            return fetchBegin(state);
        case Types.FETCH_FAILURE:
            const message = typeof payload.error === 'string' ? payload.error : payload.error.toString();
            return fetchFailure(state, message);
        default:
            return state;
    }
};

export default user;
