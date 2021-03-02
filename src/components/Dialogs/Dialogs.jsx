import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {updateNewMessageBodyActionCreator, sendMessageActionCreator, addSomeAvatarAndNameActionCreator} from './../../redux/reducer-dialogs';

const Dialogs = (props) => {
    
    let dialogsElements =
        props.store.getState().dialogsPage.dialogsData.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />)
    let messagesElements =
        props.store.getState().dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id} />)
    
    let newMessageBody = props.store.getState().dialogsPage.newMessageBody;

    let onAddSomeAvatarAndNameWithMessageClick = () => {  // - click button
        props.store.dispatch(addSomeAvatarAndNameActionCreator());
        props.store.dispatch(sendMessageActionCreator());  
    }

    let onSendMessageClick = (event) => { // - change textarea
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }
    debugger;
    return (        
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.blockTextarea}>
                <div>
                    <textarea onChange={onSendMessageClick} 
                            placeholder='Send your message...' 
                            value={newMessageBody} />  
                </div>
                <div>
                    <button onClick={onAddSomeAvatarAndNameWithMessageClick} >Send message</button>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs;