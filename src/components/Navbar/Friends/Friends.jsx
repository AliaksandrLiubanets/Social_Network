import s from './Friends.module.css';
import AvatarFriend from './AvatarFriend/AvatarFriend';
import NameFriend from './NameFriend/NameFriend';

const Friends = (props) => {

    let avatarFriend =
        props.state.map(ava => <AvatarFriend avatar={ava.avatar} />);
    let nameFriend =
        props.state.map(name => <NameFriend name={name.name} />);

    return (
        <div className={s.boxFriend}>
            <div className={s.wordFriends}>
                Friends
            </div>
            < div className={s.coupleAvaName}>               
                {avatarFriend}
                {nameFriend}
            </div>
        </div>
    )
}

export default Friends;