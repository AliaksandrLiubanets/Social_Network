import s from './NameFriend.module.css';

const NameFriend = (props) => {
    return (
        <div className={s.nameFriend}>
            <span>{props.name} </span>
        </div>
    )
}

export default NameFriend;