import React from 'react';
import { connect } from 'react-redux';
import { followUser, // изменили импорты, убрав AC  и в reducer-users тоже.
    setCurrentPage, 
    setTotalUsersCount, 
    setUsers, 
    toggleIsFetching, 
    unfollowUser } from '../../redux/reducer-users';
import *as axios from 'axios';
import Users from '../Users/Users';
import Preloader from '../../common/Preloader/Preloader';

class UsersContainer extends React.Component {        
       
    componentDidMount() {  // Не переднеаём этот метод в props, т.к. чистой функции - компоненте Users, не нужно делать запрос на сервер при загрузке страницы.
                           // Для этого мы и создавали классовую компоненту UsersContainer( бывшая UsersAPIComponent), чтобы она взяла на себя функцию запроса на сервер при загрузке страницы.
            
            this.props.toggleIsFetching(true) // При загрузке странице перекулючаем toggle на true в state, т.е. идёт загрузка
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.toggleIsFetching(false) // После получения response от сервера, переключаем toggle на false, т.е. уже загружено всё, меняем state. Прекратилась отрисовка Preloader.
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
            })   
    }    
    
    onChangeClick = (pageNumber) => {
            this.props.toggleIsFetching(true)
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => { 
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items)
            })   
    }    
            
    render = () => {  // Если в state isFetching значение true, то вызываем Preloader.                        

            return <> 
            { this.props.isFetching ? <Preloader />  : null } 
            
            <Users   totalUsersCount={this.props.totalUsersCount} 
                            pageSize={this.props.pageSize}
                            currentPage={this.props.currentPage}
                            users={this.props.users}
                            onChangeClick={this.onChangeClick} 
                            followUser={this.props.followUser}
                            unfollowUser={this.props.unfollowUser} />
                            </>
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching        
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

export default connect(mapStateToProps, { followUser, unfollowUser, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } )(UsersContainer);

