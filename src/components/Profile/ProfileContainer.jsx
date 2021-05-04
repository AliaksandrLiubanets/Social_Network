import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { HOCRedirectToLogin } from '../../HOC/HOCRedirectToLogin'
import { setUserProfileThunkCreator } from '../../redux/reducer-profile'
import Profile from './Profile'

class ProfileContainer extends React.Component {
    componentDidMount () {     
       
        let userId = this.props.match.params.userId;

        if(!userId) { // В Users.jsx мы кликаем по NavLink и передаём в url u.id. В App устанавливаем в path='/profile/:userId?' переменную userId и символ ? означает, что параметр userId стал опционным - он мож быть или не быть. Его мы берём из появившегося в props нового свойства match.params благодаря использованию withRouter.  
            userId = 2;  
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {withCredentials: true})
        this.props.setUserProfile(userId)
        // usersAPI.getProfileUser(userId)
        // .then( data => {                  
        //     this.props.setUserProfile(data)
        // })
    }

    render = () => {   
        return <Profile {...this.props} />      
    }    
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        // isAuth: state.auth.isAuth       
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (userId) => {
            dispatch(setUserProfileThunkCreator(userId))
        }
    }
}

// const AuthRedirectComponent = (props) => {
//     if (props.isAuth ) return <Redirect to='./login'/>
//     return <ProfileContainer {...props}/>
// }

// const HOCRedirectToLogin = (Component) => {
//     class WrapperComponent extends React.Component {
//         render = () => {
//             if (!this.props.isAuth) return <Redirect to='/login'/>
//             return <Component {...this.props} />
//         }
//     }
//     return WrapperComponent
// }


// const ProfileContainer = connect(mapStateToProps, mapDispatchToProps )(ProfileAPIContainer)

// export default ProfileContainer


// let WithRedirectToLoginProfile = HOCRedirectToLogin(ProfileContainer)

// const WithURLDataContainerComponent = withRouter(WithRedirectToLoginProfile)

// export default connect(mapStateToProps, mapDispatchToProps )(WithURLDataContainerComponent)


//Т.к. connect возвращает контейнерную компоненту, то её можно передать в качестве аргумента в ф-цию HOCRedirectToLogin
//hoc withRouter тоже возвращает контейнерную компоненту. В связи с этим делаем сложную вложенность, но короче.  
//То же самое:

export default withRouter(HOCRedirectToLogin(connect(mapStateToProps, mapDispatchToProps )(ProfileContainer)))