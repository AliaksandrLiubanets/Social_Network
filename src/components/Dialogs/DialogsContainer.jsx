import Dialogs from './Dialogs';
import { updateNewMessageBodyActionCreator, sendMessageAC, addSomeAvatarAndNameActionCreator, setDialogsMessageAC } from '../../redux/reducer-dialogs';
import { connect } from 'react-redux';
import { HOCRedirectToLogin } from '../../HOC/HOCRedirectToLogin';
import { compose } from 'redux';

// const DialogsContainer = () => {

//     return <storeContext.Consumer>
//         {store => {
//             let state = store.getState().dialogsPage;

//             let addAvatarAndMessage = () => {  // - click button
//                 store.dispatch(addSomeAvatarAndNameActionCreator());
//                 store.dispatch(sendMessageActionCreator());
//             }

//             let changeText = (body) => { // - change textarea
//                 store.dispatch(updateNewMessageBodyActionCreator(body));
//             }
//             return <Dialogs
//                 state={state}
//                 newMessageBody={state.newMessageBody}
//                 changeText={changeText}
//                 addAvatarAndMessage={addAvatarAndMessage} />
//         }
//         }
//     </storeContext.Consumer>
// }

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData
        // newMessageBody: state.dialogsPage.newMessageBody,
        // dialogsMessage: state.dialogsPage.dialogsMessage
        // isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(sendMessageAC(message));
        },
        // setDialogsMessage: (message) => {
        //     dispatch(setDialogsMessageAC(message))
        // }
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