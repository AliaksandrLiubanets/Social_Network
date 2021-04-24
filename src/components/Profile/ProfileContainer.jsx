import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { usersAPI } from '../../api/api'
import { setUserProfile } from '../../redux/reducer-profile'
import Profile from './Profile'

class ProfileContainer extends React.Component {
    componentDidMount () {        
        let userId = this.props.match.params.userId;

        if(!userId) { // В Users.jsx мы кликаем по NavLink и передаём в url u.id. В App устанавливаем в path='/profile/:userId?' переменную userId и символ ? означает, что параметр userId стал опционным - он мож быть или не быть. Его мы берём из появившегося в props нового свойства match.params благодаря использованию withRouter.  
            userId = 2;  
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {withCredentials: true})
        usersAPI.getProfileUser(userId)
        .then( data => {                  
            this.props.setUserProfile(data)
        })
    }

    render = () => {        
        return <>
        <Profile {...this.props} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile       
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUserProfile: (profile) => {
//             dispatch(setUserProfile(profile))
//         }
//     }
// }

// const ProfileContainer = connect(mapStateToProps, mapDispatchToProps )(ProfileAPIContainer)

// export default ProfileContainer

const WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile} )(WithURLDataContainerComponent)