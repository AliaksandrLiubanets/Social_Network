import { connect } from 'react-redux';
import Friends from './Friends';

// const FriendsContainer = () => {
// debugger;
//     return <storeContext.Consumer>
//         {store => <Friends state={store.getState().sidebar.friends} />
//         }
//     </storeContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        state: state.sidebar.friends
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;