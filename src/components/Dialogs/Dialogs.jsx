import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {    
    let dialogsElements = 
    props.state.dialogsData.map( d => <DialogItem avatar={d.avatar} name={d.name} id={d.id} /> )
    let messagesElements = 
    props.state.messagesData.map( m => <Message message={m.message} id={m.id} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;