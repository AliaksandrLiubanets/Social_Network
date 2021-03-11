import storeContext from '../../../storeContext';
import Friends from './Friends';

const FriendsContainer = () => {
debugger;
    return <storeContext.Consumer>
        {store => <Friends state={store.getState().sidebar.friends} />
        }
    </storeContext.Consumer>
}

export default FriendsContainer;