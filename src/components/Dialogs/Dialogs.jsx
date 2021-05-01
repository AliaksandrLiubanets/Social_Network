import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';

const Dialogs = (props) => {
    
    let dialogsElements =
        props.state.dialogsData.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name} id={d.id} />)
    let messagesElements =
        props.state.messagesData.map(m => <Message key={m.id} message={m.message} id={m.id} />)
    
    let onAddSomeAvatarAndNameWithMessageClick = () => {  // - click button
        props.addAvatarAndMessage();  
    }

    let onSendMessageClick = (event) => { // - change textarea
        let body = event.target.value;
        props.changeText(body);
    }

    if (props.isAuth ) return <Redirect to='./login'/>
    
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
                            value={props.newMessageBody} 
                            autoFocus/>  
                </div>
                <div>
                    <button onClick={onAddSomeAvatarAndNameWithMessageClick} >Send message</button>
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs;