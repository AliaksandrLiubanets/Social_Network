import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserDataThunkCreator, setUserAvatar } from '../../redux/reducer-auth';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId;

    // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }) // при кросс-доменном запросе необходимо делать уточнение, что всё равно надо сделать запрос, несмотря на кросс-домменый запрос. Используется {withCredentials: ture}. Предварительно мы уже зарегистрировались на сайте!!!
    this.props.setAuth()
    // usersAPI.getAuthData()
    //   .then(response => {
        
    //     if (response.data.resultCode === 0) {
    //       let { id, email, login } = response.data.data;
    //       this.props.setAuthUserData(id, email, login)
    //     }
    //   })

    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, { withCredentials: true })

    this.props.setUserAvatar(userId)

    // usersAPI.getProfileUser(userId)
    //   .then(data => {        
    //     this.props.setUserAvatar(data.photos.small)
    //   })

  }

  render = () => {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  userId: state.auth.userId,
  userAvatar: state.auth.userAvatar,

})

const mapDispatchToProps = (dispatch) => {
  return {
    setAuth: () => {
      dispatch(setAuthUserDataThunkCreator())
    },
    setUserAvatar: (userId) => {
      dispatch(setUserAvatar(userId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

