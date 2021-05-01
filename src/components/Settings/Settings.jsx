import { Redirect } from 'react-router';
import s from './Settings.module.css';

const Settings = (props) => {
    if (props.isAuth) return <Redirect to='./login' />
    return (
        <div>
            Settings
        </div>
    )
} 

export default Settings;