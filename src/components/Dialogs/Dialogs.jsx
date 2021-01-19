import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={`${s.dialog} ${s.active}`}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {    
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogesData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},      
    ]
    
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is it going?'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogesData[0].name} id={dialogesData[0].id} />
                <DialogItem name={dialogesData[1].name} id={dialogesData[1].id} />
                <DialogItem name={dialogesData[2].name} id={dialogesData[2].id} />
                <DialogItem name={dialogesData[3].name} id={dialogesData[3].id} />
                <DialogItem name={dialogesData[4].name} id={dialogesData[4].id} />
                <DialogItem name={dialogesData[5].name} id={dialogesData[5].id} />
                                               
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />                             
            </div>
        </div>
    )
}

export default Dialogs;