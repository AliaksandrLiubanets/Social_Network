import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { setUserProfile } from '../../redux/reducer-profile'
import Profile from './Profile'

class ProfileContainer extends React.Component {
    componentDidMount () {        
          
        let userId = this.props.match.params.userId;

        if(!userId) { // В App path='/profile/:userId?' символ ? означает, что параметр userId сттал опционным - он мож быть или не быть. А значит в переменной userId, 
            userId = 2;  
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {withCredentials: true})
        .then( response => {         
                 
            this.props.setUserProfile(response.data)
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