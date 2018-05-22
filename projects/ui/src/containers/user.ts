import { connect } from 'react-redux';
import { UserActions } from '../actions';
import { User } from '../components/user';
import { State } from '../reducers';

const mapStateToProps = (state: State) => {
    const user = state.user;
    return {
        id: user.id,
        name: user.name,
        isLoading: user.isLoading,
        error: user.error,
    };
};

// const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
//     return {
//         refresh: () => {
//             dispatch(UserActions.fetchUserComplex());
//         }
//     }
// };

const refresh = UserActions.fetchBegin;
const mapDispatchToProps = {
    refresh,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
