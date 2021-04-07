import React from 'react';
import s from './Users.module.css';
import *as axios from 'axios';
import userEmptyAvatar from '../../assets/userEmptyAvatar.png'

class Users extends React.Component {

        // constructor(props) {
        //         super(props);

        componentDidMount() {
                axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => { 
                        this.props.setUsers(response.data.items)
                })   
        }            
              

        render = () => {

                return (<div>                     
                        {

                                this.props.users.map(u => < div key={u.id} className={s.userData} >
                                        <div className={s.avaFollow}>
                                                <div className={s.userPhotoBox}>
                                                        <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userEmptyAvatar}></img>
                                                </div>
                                                <div className={s.buttonBox}>
                                                        {
                                                                u.followed === false
                                                                        ? <button onClick={() => { this.props.followUser(u.id) }}>Follow</button>
                                                                        : <button onClick={() => { this.props.unfollowUser(u.id) }}>Unfollow</button>
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
                                )
                        }
                </div >
                )
        }

}

export default Users;