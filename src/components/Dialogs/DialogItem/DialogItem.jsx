import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={`${s.dialog} ${s.active}`}>
        <NavLink to={path}><div><img src={props.avatar}></img><span>{props.name}</span></div></NavLink>
    </div>
}

export default DialogItem;