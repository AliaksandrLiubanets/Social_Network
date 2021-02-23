import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements =
        props.dialogsPage.dialogsData.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />)
    let messagesElements =
        props.dialogsPage.messagesData.map(m => <Message message={m.message} id={m.id} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch({type: 'ADD-MESSAGE'});        
    }

    let addSomeAvatarAndName = () => {
        props.dispatch({type: 'ADD-SOME-AVATAR-AND-NAME'});
    }

    let addSomeAvatarAndNameWithMessage = () => {
        debugger;
        props.dispatch({type: 'ADD-SOME-AVATAR-AND-NAME'});
        props.dispatch({type: 'ADD-MESSAGE'});  
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
    }
    
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
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={addSomeAvatarAndNameWithMessage}  >Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;