import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/reducer-profile'
import Profile from './Profile'



class ProfileAPIContainer extends React.Component {
    componentDidMount () {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
        .then( response => {
            debugger;
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

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfile(profile))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps )(ProfileAPIContainer)

export default ProfileContainer
// export default connect(mapStateToProps, mapDispatchToProps )(ProfileContainer)