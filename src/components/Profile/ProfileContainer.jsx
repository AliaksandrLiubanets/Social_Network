import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { HOCRedirectToLogin } from '../../HOC/HOCRedirectToLogin'
import { getStatusThunkCreator, setUserProfileThunkCreator, updateStatusThunkCreator } from '../../redux/reducer-profile'
import Profile from './Profile'

class ProfileContainer extends React.Component {
    componentDidMount () {     
       
        let userId = this.props.match.params.userId;

        if(!userId) { 
            userId = 2;  
        }
        
        this.props.setUserProfile(userId)   
        this.props.getStatus(userId)        
    }

    render = () => {   
        return <Profile {...this.props} />      
    }    
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (userId) => {
            dispatch(setUserProfileThunkCreator(userId))
        },
        getStatus: (userId) => {
            dispatch(getStatusThunkCreator(userId))
        },
        updateStatus: (status) => {
            dispatch(updateStatusThunkCreator(status))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    HOCRedirectToLogin
)(ProfileContainer)

