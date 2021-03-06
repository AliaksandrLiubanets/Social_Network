import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageSend from '../../common/formControls/MessageSend';
import { reduxForm } from 'redux-form'
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let dialogsElements =
        props.dialogsData.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name} id={d.id} message={d.message}/>)
    
    let dialogsMessages = 
    props.dialogsData.map(m => <Message key={m.id} id={m.id} message={m.message}/>)
    
    let addMessage = (formData) => { 
        props.addMessage(formData.message);  
    }
    
    return (        
        <div className={s.dialogs}>
             
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>{dialogsMessages}</div>
            <div className={s.blockTextarea}>
                <div>
                    <ReduxDialogsForm onSubmit={addMessage}/>
                </div>
            </div>
            
        </div>
    )
}

const ReduxDialogsForm = reduxForm({form: 'dialogsMessage'})(MessageSend)

export default Dialogs;