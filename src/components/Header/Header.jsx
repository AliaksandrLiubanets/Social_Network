import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import loginUserAvatar from '../../assets/loginUserAvatar.png';
import userEmptyAvatar from '../../assets/userEmptyAvatar.png'

const Header = (props) => {

  return <header className={s.header}>
    {
      !props.isAuth
        ? <NavLink to={'./login'}>
          <div className={s.authorizedUser}>
            <div className={s.userAvatar}><img src={loginUserAvatar} /></div>
            <div className={s.login}>Login</div>
          </div>
        </NavLink>
        : <NavLink to={'./profile/' + props.userId}>
          <div className={s.authorizedUser}>
            <div className={s.userAvatar}>
              {
                !props.userAvatar
                  ? <img src={userEmptyAvatar} />
                  : <img src={props.userAvatar} />
              }
            </div>
            <div className={s.userLogin}>{props.login}</div>
          </div>
        </NavLink>
    }
    {
      props.isAuth && <div><button className={s.logoutButton} onClick={props.logout}>logout</button></div>
    }
  </header>
}
// доделать, чтобы при клике на NavLink to={'./profile' + userId} был переход на страницу профиля с залогигиным userId.


export default Header;
