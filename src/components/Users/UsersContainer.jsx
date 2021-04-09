import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/reducer-users';
// import UsersContainer from './UsersAPIComponent';
import *as axios from 'axios';
import Users from '../Users/Users'

class UsersAPIComponent extends React.Component {        
       
    componentDidMount() {  // Не переднеаём этот метод в props, т.к. чистой функции - компоненте Users, не нужно делать запрос на сервер при загрузке страницы.
                           // Для этого мы и создавали классовую компоненту (UsersAPIComponent), чтобы она взяла на себя функцию запроса на сервер при загрузке страницы.

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

            return <Users   totalUsersCount={this.props.totalUsersCount} 
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            users={this.props.users}
                            onChangeClick={this.onChangeClick} 
                            followUser={this.props.followUser}
                            unfollowUser={this.props.unfollowUser} />
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followAC(userId))
        },
        unfollowUser: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (users) => {
            dispatch(setCurrentPageAC(users))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountAC(usersCount))
        }

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;