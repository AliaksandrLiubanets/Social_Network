import Dialogs from './Dialogs';
import { updateNewMessageBodyActionCreator, sendMessageActionCreator, addSomeAvatarAndNameActionCreator } from '../../redux/reducer-dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = () => {

//     return <storeContext.Consumer>
//         {store => {
//             let state = store.getState().dialogsPage;

//             let addAvatarAndMessage = () => {  // - click button
//                 store.dispatch(addSomeAvatarAndNameActionCreator());
//                 store.dispatch(sendMessageActionCreator());
//             }

//             let changeText = (body) => { // - change textarea
//                 store.dispatch(updateNewMessageBodyActionCreator(body));
//             }
//             return <Dialogs
//                 state={state}
//                 newMessageBody={state.newMessageBody}
//                 changeText={changeText}
//                 addAvatarAndMessage={addAvatarAndMessage} />
//         }
//         }
//     </storeContext.Consumer>
// }

const mapStateToProps = (state) => {
    return {
        state: state.dialogsPage,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeText: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        },
        addAvatarAndMessage: () => {
            dispatch(addSomeAvatarAndNameActionCreator());
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;