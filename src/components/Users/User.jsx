import userEmptyAvatar from '../../assets/userEmptyAvatar.png'
import { NavLink } from 'react-router-dom';
import s from './User.module.css'

const User = (props) => {
    let u = props.user
    return <div className={s.userData} >
        <div className={s.avaFollow}>
            <div className={s.userPhotoBox}>
                <NavLink to={'./profile/' + u.id}>
                    <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userEmptyAvatar}></img>
                </NavLink>
            </div>
            <div className={s.buttonBox}>
                {
                    u.followed === false
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.followUser(u.id)
                        }}>Follow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollowUser(u.id)
                        }}>Unfollow</button>
                }
            </div>
        </div>
        <div className={s.personalDataBox}>
            <div className={s.nameStatus}>
                <div className={s.name}>{u.name}</div>
                <div className={s.status}>{u.status}</div>
            </div>
            <div className={s.countryCity}>
                <div className={s.country}>{"u.location.country"}</div>
                <div className={s.city}>{"u.location.city"}</div>
            </div>
        </div>
    </div>
}

export default User