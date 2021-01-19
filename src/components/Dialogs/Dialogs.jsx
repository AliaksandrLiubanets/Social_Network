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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1' />
                <DialogItem name='Andrey' id='2' />
                <DialogItem name='Sveta' id='3' />
                <DialogItem name='Sasha' id='4' />
                <DialogItem name='Victor' id='5' />
                <DialogItem name='Valera' id='6' />

                {/* <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Sveta</NavLink>
                </div> */}

                {/* <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Valera</NavLink>
                </div> */}
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How is it going?' />
                <Message message='Yo' />                
            </div>
        </div>
    )
}

export default Dialogs;