import { connect } from "react-redux"
import { Redirect } from "react-router"
import HOCRedirectToLogin from "../../HOC/HOCRedirectToLogin"
import Settings from "./Settings"


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

// const AuthRedirectComponent = (props) => {
//     if (props.isAuth) return <Redirect to='/login'/>
//     return <Settings {...props}/>
// }

// const HOCRedirectToLogin = (Component) => {
//     let WrapperComponent = (props) => {
//         if (!props.isAuth) return <Redirect to='/login'/>
//         return <Component {...props} />
//     }
//     return WrapperComponent
// }

let WithRedirectToLoginSettingsContainer = HOCRedirectToLogin(Settings)

const SettingsContainer = connect(mapStateToProps)(WithRedirectToLoginSettingsContainer);

export default SettingsContainer;


