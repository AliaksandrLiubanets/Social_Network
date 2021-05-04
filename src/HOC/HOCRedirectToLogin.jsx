import { connect } from "react-redux"
import { Redirect } from "react-router"
import React from 'react'

const HOCRedirectToLogin = (Component) => {
    class WrapperComponent extends React.Component {
        render = () => {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props} />
        }
    }
    return WrapperComponent
}

// export default HOCRedirectToLogin

// const HOCRedirectToLogin = (Component) => {
//     let WrapperComponent = (props) => {
//         if (props.isAuth) return <Redirect to='/login'/>
//         return <Component {...props} />
//     }
//     return WrapperComponent
// }

export default HOCRedirectToLogin




