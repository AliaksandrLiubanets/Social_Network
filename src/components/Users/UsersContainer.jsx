import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage,   
         getUsersThunkCreator,
         followUser,
         unfollowUser } from '../../redux/reducer-users';
import Users from '../Users/Users';
import Preloader from '../../common/Preloader';

import { compose } from 'redux';
import { getUsers, 
         getPageSize, 
         getTotalUsersCount, 
         getCurrentPage, 
         getIsFetching, 
         getFollowingInProgress, 
         tenthUsers,
         everySecondUserWithPhoto,
         filteredWithPhoto,
         usersWithNameDmitriy,
         usersWithLetterD,
         usersWithTheFirstLetterDd} from '../../redux/selectors/user-selectors';

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
        // users: getUsers(state),
        // users: everySecondUserWithPhoto(state),
        // users: filteredWithPhoto(state),
        // users: usersWithNameDmitriy(state),
        // users: usersWithLetterD(state),
        users: usersWithTheFirstLetterDd(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),        
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, { followUser, unfollowUser, setCurrentPage, getUsersThunkCreator } )
)(UsersContainer)

