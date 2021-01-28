import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements =
        props.state.dialogsData.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} />)
    let messagesElements =
        props.state.messagesData.map(m => <Message message={m.message} id={m.id} />)

    let newMessage = React.createRef();
    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
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
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;