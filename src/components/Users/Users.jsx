import React from 'react';
import s from './Users.module.css';
import *as axios from 'axios';
import userEmptyAvatar from '../../assets/userEmptyAvatar.png'

let Users = (props) => {
        
        if (props.users.length === 0) {
                axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then( response => {
                        debugger;
                        props.setUsers(response.data.items)
                })

                // props.setUsers([
                //         { id: 1, followed: true, fullName: 'Dimych K', location: { country: 'Belarus', city: 'Minsk' }, status: 'I\'m a boss', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa__Y_-g-Hqiasz_OgSIhk_N5VHcbRBc3Ng&usqp=CAU' },
                //         { id: 2, followed: false, fullName: 'Andrew M', location: { country: 'Ukraine', city: 'Kiev' }, status: 'I\'m a boss too', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaIeEcKGjyP_NWQWd-8pRuJiR_ku780dyUQ&usqp=CAU' },
                //         { id: 3, followed: true, fullName: 'Kostya G', location: { country: 'Russia', city: 'Moscow' }, status: 'I\'m a boss too', avatar: 'https://i.pinimg.com/originals/f4/05/4c/f4054c3db50a08c2f266e82b44b5ca90.jpg' },
                //         { id: 4, followed: true, fullName: 'Sasha V', location: { country: 'Latvia', city: 'Riga' }, status: 'I\'m a boss too', avatar: 'https://i.pinimg.com/564x/98/b2/88/98b28840d82a8ec637642f4285a3f38a.jpg' },
                // ])
        }

        return (<div>
                {
                        props.users.map(u => < div key={u.id} className={s.userData} >
                                <div className={s.avaFollow}>
                                        <div className={s.userPhotoBox}>
                                                <img className={s.userPhoto} src={ u.photos.small !== null ? u.photos.small : userEmptyAvatar }></img>
                                        </div>
                                        <div className={s.buttonBox}>
                                                {
                                                        u.followed === false
                                                                ? <button onClick={() => { props.followUser(u.id) }}>Follow</button>
                                                                : <button onClick={() => { props.unfollowUser(u.id) }}>Unfollow</button>
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

export default Users;