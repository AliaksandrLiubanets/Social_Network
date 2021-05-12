import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage,   
         getUsersThunkCreator,
         followUser,
         unfollowUser } from '../../redux/reducer-users';
import Users from '../Users/Users';
import Preloader from '../../common/Preloader/Preloader';
import { HOCRedirectToLogin } from '../../HOC/HOCRedirectToLogin';
import { compose } from 'redux';

class UsersContainer extends React.Component {        
       
    componentDidMount() {  

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
                
    }    
    
    onChangeClick = (pageNumber) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

    }    
            
    render = () => {                    

            return <> 
            { this.props.isFetching ? <Preloader />  : null } 
            
            <Users   totalUsersCount={this.props.totalUsersCount} 
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     users={this.props.users}
                     onChangeClick={this.onChangeClick} 
                     followUser={this.props.followUser}
                     unfollowUser={this.props.unfollowUser}
                     isFetching={this.props.isFetching}
                     followingInProgress={this.props.followingInProgress}
                             />
                            </>
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,        
        followingInProgress: state.usersPage.followingInProgress,        
    }
}

export default compose(
    connect(mapStateToProps, { followUser, unfollowUser, setCurrentPage, getUsersThunkCreator } ),
    HOCRedirectToLogin
)(UsersContainer)

