import React from 'react';
import s from './Users.module.css';
import Pagination from '../../common/Pagination/Pagination';
import User from './User';

const Users = ({ totalUsersCount, pageSize, onChangeClick, currentPage, ...props }) => {

    return <div className={s.usersBox}>
        <Pagination totalUsersCount={totalUsersCount}
                    pageSize={pageSize}
                    onChangeClick={onChangeClick}
                    currentPage={currentPage} 
/>
        {
            props.users.map(u => <User  user={u}
                                        key={u.id} 
                                        followingInProgress={props.followingInProgress} 
                                        followUser={props.followUser} 
                                        unfollowUser={props.unfollowUser}  />
                                    )
        }
    </div>
}

export default Users;