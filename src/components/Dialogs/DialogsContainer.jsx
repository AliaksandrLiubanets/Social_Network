import Dialogs from './Dialogs';
import { sendMessageAC } from '../../redux/reducer-dialogs';
import { connect } from 'react-redux';
import { HOCRedirectToLogin } from '../../HOC/HOCRedirectToLogin';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(sendMessageAC(message));
        }
    }
} 

// const AuthRedirectComponent = (props) => {
//     if (props.isAuth ) return <Redirect to='./login'/>
//     return <Dialogs {...props}/>
// }

// const HOCRedirectToLogin = (Component) => {
//     let WrapperComponent = (props) => {
//         if (!props.isAuth) return <Redirect to='/login'/>
//         return <Component {...props} />
//     }
//     return WrapperComponent
// }


// let WithRedirectToLoginDialogs = HOCRedirectToLogin(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(WithRedirectToLoginDialogs);

// export default DialogsContainer;


//Т.к. connect возвращает контейнерную компоненту, то её можно передать в качестве аргумента в ф-цию HOCRedirectToLogin  
//То же самое:

// const DialogsContainer = HOCRedirectToLogin(connect(mapStateToProps, mapDispatchToProps)(Dialogs));

// export default DialogsContainer;

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    HOCRedirectToLogin
)(Dialogs)