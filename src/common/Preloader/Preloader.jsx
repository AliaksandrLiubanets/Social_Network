import preloader from '../../assets/preloader.gif'
import s from './Preloader.module.css'

const Preloader = (props) => {
    return <img className={s.preloader} src={preloader} />
}

export default Preloader;
