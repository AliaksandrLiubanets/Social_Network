import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/reducer-auth';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }) // при кросс-доменном запросе необходимо делать уточнение, что всё равно надо сделать запрос, несмотря на кросс-домменый запрос. Используется {withCredentials: ture}. Предварительно мы уже зарегистрировались на сайте!!!
      .then(response => {

        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          this.props.setAuthUserData(id, email, login)
        }
      })
  }

  render = () => {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  userId: state.auth.userId
})

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setAuth: (userId, email, login) => {
//       dispatch(setAuthUserData(userId, email, login))
//     }
//   }
// }

export default connect(mapStateToProps, {setAuthUserData} )(HeaderContainer);
// export default HeaderContainer;