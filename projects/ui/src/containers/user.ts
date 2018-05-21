import { connect, Dispatch } from 'react-redux';
import { User } from '../components/user';
import { State } from '../reducers';
import { UserActions } from '../actions'


const mapStateToProps = (state: State) => {
    const user = state.user;
    return {
        id: user.id,
        name: user.name,
        isLoading: user.isLoading,
        error: user.error
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        refresh: () => {
            console.log("Refresh2");
            dispatch(UserActions.fetchUser2());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
