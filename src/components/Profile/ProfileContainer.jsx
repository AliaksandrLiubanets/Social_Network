import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import Preloader from '../../common/Preloader'
import { HOCRedirectToLogin } from '../../HOC/HOCRedirectToLogin'
import { getStatusThunkCreator, initializeProfile, setUserProfileThunkCreator, updateStatusThunkCreator } from '../../redux/reducer-profile'
import Profile from './Profile'

class ProfileContainer extends React.Component {
    componentDidMount () {     
       
        let userId = this.props.match.params.userId;

        if (!userId) { 
            userId = this.props.userId;  
            // if (!userId) {
            //     this.props.history.push('/login') // аналог Redirect на Login, если все равно каким-то чудом не будет задан userId
            // }
        }
        
        // this.props.setUserProfile(userId)   
        // this.props.getStatus(userId)  
        this.props.initializeProfile(userId)      
    }

    render = () => {  
        
        if (!this.props.isInitialized) {
            return <Preloader/>
        }

        return <Profile {...this.props} />      
    }    
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        isInitialized: state.profilePage.isInitialized  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // setUserProfile: (userId) => {
        //     dispatch(setUserProfileThunkCreator(userId))
        // },
        // getStatus: (userId) => {
        //     dispatch(getStatusThunkCreator(userId))
        // },
        updateStatus: (status) => {
            dispatch(updateStatusThunkCreator(status))
        },
        initializeProfile: (userId) => {
            dispatch(initializeProfile(userId))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    HOCRedirectToLogin
)(ProfileContainer)

