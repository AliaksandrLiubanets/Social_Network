import { connect } from "react-redux"
import { Redirect } from "react-router"
import React from 'react'

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const HOCRedirectToLogin = (Component) => {
    class WrapperComponent extends React.Component {
        render = () => {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props} />
        }
    }

    let ConnectedWrapperComponent = connect(mapStateToProps)(WrapperComponent)

    return ConnectedWrapperComponent
}

// export default HOCRedirectToLogin

// const HOCRedirectToLogin = (Component) => {
//     let WrapperComponent = (props) => {
//         if (props.isAuth) return <Redirect to='/login'/>
//         return <Component {...props} />
//     }
//     return WrapperComponent
// }

// export default HOCRedirectToLogin




