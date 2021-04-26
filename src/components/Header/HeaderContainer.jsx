import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from '../../api/api';
import { setAuthUserData, setUserAvatar } from '../../redux/reducer-auth';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId;
    // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }) // при кросс-доменном запросе необходимо делать уточнение, что всё равно надо сделать запрос, несмотря на кросс-домменый запрос. Используется {withCredentials: ture}. Предварительно мы уже зарегистрировались на сайте!!!
    usersAPI.getAuthData()
      .then(response => {
        
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login)
        }
      })

    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, { withCredentials: true }) 
    usersAPI.getProfileUser(userId)
      .then(data => {        
        this.props.setUserAvatar(data.photos.small)
      })
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setAuth: (userId, email, login) => {
//       dispatch(setAuthUserData(userId, email, login))
//     }
//   }
// }

export default connect(mapStateToProps, { setAuthUserData, setUserAvatar })(HeaderContainer);
// export default HeaderContainer;