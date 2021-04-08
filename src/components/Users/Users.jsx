import React from 'react';
import s from './Users.module.css';
import *as axios from 'axios';
import userEmptyAvatar from '../../assets/userEmptyAvatar.png'

class Users extends React.Component {
       
        componentDidMount() {
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => { 
                        this.props.setUsers(response.data.items)
                        this.props.setTotalUsersCount(response.data.totalCount)
                })   
        }    
        
        onChangeClick = (pageNumber) => {
                this.props.setCurrentPage(pageNumber);
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => { 
                        this.props.setUsers(response.data.items)
                })   
        }              

        render = () => {

                let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
                let page = [];
                
                for(let i = 1; i <= pageCount; i++) {
                        page.push(i);
                }

                return (<div className={s.usersBox}> 
                        <div className={s.paginationBox}>
                                {
                                        page.map( p => {
                                                return <span onClick={ () => {this.onChangeClick(p)} } className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                                        })
                                }                                
                                </div>                    
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