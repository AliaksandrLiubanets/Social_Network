import s from './Friends.module.css';
import AvatarFriend from './AvatarFriend/AvatarFriend';
import NameFriend from './NameFriend/NameFriend';

const Friends = (props) => {
    debugger;  
    let avatarFriend =
        props.state.sidebar.friends.map(ava => <AvatarFriend avatar={ava.avatar} />);
    let nameFriend =
        props.state.sidebar.friends.map(name => <NameFriend name={name.name} />);

    // let friendsArray = props.state.sidebar.friends;
    // let arrayOfAvatarsAndNames = [];

    // for (let i = 0; i < friendsArray.length; i++) {
    //     arrayOfAvatarsAndNames.push(<AvatarFriend avatar={friendsArray[i].avatar} />);
    //     arrayOfAvatarsAndNames.push(<NameFriend name={friendsArray[i].name} />);
    // }

    return (
        <div className={s.boxFriend}>
            <div className={s.wordFriends}>
                Friends
            </div>
            < div className={s.coupleAvaName}>
                {/* {arrayOfAvatarsAndNames} */}
                {avatarFriend}            
                {nameFriend}
            </div>
        </div>
    )
}

export default Friends;