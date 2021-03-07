import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageBodyActionCreator, sendMessageActionCreator, addSomeAvatarAndNameActionCreator} from '../../redux/reducer-dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
          
    let addAvatarAndMessage = () => {  // - click button
        props.store.dispatch(addSomeAvatarAndNameActionCreator());
        props.store.dispatch(sendMessageActionCreator());  
    }

    let changeText = (body) => { // - change textarea
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }
    
    return (        
        <Dialogs 
        state={state} 
        newMessageBody={state.newMessageBody} 
        changeText={changeText} 
        addAvatarAndMessage={addAvatarAndMessage}/>
    )
}

export default DialogsContainer;