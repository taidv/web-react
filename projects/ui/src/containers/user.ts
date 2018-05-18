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
        hasError: user.hasError
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
    return {
        refresh: () => {
            console.log("Refresh");
            dispatch(UserActions.fetchBegin());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
