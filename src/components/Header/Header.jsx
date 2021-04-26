import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import loginUserAvatar from '../../assets/loginUserAvatar.png';
import userEmptyAvatar from '../../assets/userEmptyAvatar.png'

const Header = (props) => {  

  return <header className={s.header}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_lULuLhKRsxlcn_z3OW5mU4IV1v18fTkEg&usqp=CAU"></img>

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

  </header>
}


export default Header;
