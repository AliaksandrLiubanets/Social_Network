import React from 'react'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/reducer-profile'
import Profile from './Profile'



class ProfileContainer extends React.Component {
    componentDidMount () {

    }

    render = () => {
        return <>
        <Profile />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) {
            dispatch(setUserProfile(profile))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(ProfileContainer)