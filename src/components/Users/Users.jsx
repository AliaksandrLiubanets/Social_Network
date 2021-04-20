import React from 'react';
import s from './Users.module.css';
import userEmptyAvatar from '../../assets/userEmptyAvatar.png'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];

    for (let i = 1; i <= pageCount; i++) {
        page.push(i);
    }

    return <div className={s.usersBox}>
        <div className={s.paginationBox}>
            {
                page.map(p => {
                    return <span onClick={() => { props.onChangeClick(p) }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                })
            }
        </div>
        {
            props.users.map(u => < div key={u.id} className={s.userData} >
                <div className={s.avaFollow}>
                    <div className={s.userPhotoBox}>
                        <NavLink to={'./profile' + u.id}>
                            <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userEmptyAvatar}></img>
                        </NavLink>
                    </div>
                    <div className={s.buttonBox}>
                        {
                            u.followed === false
                                ? <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, { withCredentials: true, headers: {'API-KEY': '5932b879-3da4-4ae5-ae52-8eacea60088f'} }                                    )
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.followUser(u.id)
                                            }
                                        })                                    
                                }}>Follow</button>

                                : <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, { withCredentials: true, headers: {'API-KEY': '5932b879-3da4-4ae5-ae52-8eacea60088f'} })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollowUser(u.id)
                                        }
                                    })                                    
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
            )
        }
    </div >

}

export default Users;