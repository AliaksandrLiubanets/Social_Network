import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage,   
         getUsersThunkCreator,
         followUser,
         unfollowUser } from '../../redux/reducer-users';
import Users from '../Users/Users';
import Preloader from '../../common/Preloader/Preloader';
import { HOCRedirectToLogin } from '../../HOC/HOCRedirectToLogin';

class UsersContainer extends React.Component {        
       
    componentDidMount() {  

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
                
        //     this.props.toggleIsFetching(true)        
        //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {                
        //             this.props.toggleIsFetching(false) 
        //             this.props.setUsers(data.items)
        //             this.props.setTotalUsersCount(data.totalCount)                
        //     })   
    }    
    
    onChangeClick = (pageNumber) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

        //     this.props.toggleIsFetching(true)
        //     this.props.setCurrentPage(pageNumber);
        //     // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true}) :
        //     usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {                 
        //             this.props.toggleIsFetching(false)
        //             this.props.setUsers(data.items)
        //     })   
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         followUser: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollowUser: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (users) => {
//             dispatch(setCurrentPageAC(users))
//         },
//         setTotalUsersCount: (usersCount) => {
//             dispatch(setTotalUsersCountAC(usersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }

//     }
// }

// export default connect(mapStateToProps,{
//     followUser: followAC,
//     unfollowUser: unfollowAC,
//     setUsers: setUsersAC,
//     setCurrentPage: setCurrentPageAC,
//     setTotalUsersCount: setTotalUsersCountAC,
//     toggleIsFetching: toggleIsFetchingAC
// })(UsersContainer);

// Вставляем { объект } mapStateToProps в hoc connect и получаем сокращение кода ч-з одинаковое название callback-функций и ActionCreator. 
// В объекте, когда свойство и значение имеют одинаковое написание, то можно писать только свойства.
// А ф-ция connect сама внутри себя создаёт метод mapDispatchToProps, который возвращает объект, при наличии объекта внутри себя.




// let withRedirectToLoginUsers = HOCRedirectToLogin(UsersContainer)

// export default connect(mapStateToProps, { 
//         followUser, unfollowUser,  
//         setCurrentPage, getUsersThunkCreator } )(withRedirectToLoginUsers);

//Т.к. connect возвращает контейнерную компоненту, то её можно передать в качестве аргумента в ф-цию HOCRedirectToLogin  
//То же самое:

export default HOCRedirectToLogin(connect(mapStateToProps, { 
        followUser, unfollowUser,  
        setCurrentPage, getUsersThunkCreator } )(UsersContainer))

