import { connect } from "react-redux"
import Settings from "./Settings"


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const SettingsContainer = connect(mapStateToProps)(Settings);

export default SettingsContainer;


