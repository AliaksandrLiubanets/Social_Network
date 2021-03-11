import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageBodyActionCreator, sendMessageActionCreator, addSomeAvatarAndNameActionCreator } from '../../redux/reducer-dialogs';
import storeContext from '../../storeContext';

const DialogsContainer = () => {

    return <storeContext.Consumer>
        {store => {
            let state = store.getState().dialogsPage;

            let addAvatarAndMessage = () => {  // - click button
                store.dispatch(addSomeAvatarAndNameActionCreator());
                store.dispatch(sendMessageActionCreator());
            }

            let changeText = (body) => { // - change textarea
                store.dispatch(updateNewMessageBodyActionCreator(body));
            }
            return <Dialogs
                state={state}
                newMessageBody={state.newMessageBody}
                changeText={changeText}
                addAvatarAndMessage={addAvatarAndMessage} />
        }
        }
    </storeContext.Consumer>
}

export default DialogsContainer;