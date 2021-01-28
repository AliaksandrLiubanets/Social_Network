import s from './AvatarFriend.module.css';

const AvatarFriend = (props) => {
    return (
        <div className={s.avatarFriend}>
            <img src={props.avatar}></img>
        </div>
    )
}

export default AvatarFriend;