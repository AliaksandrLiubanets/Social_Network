import Preloader from '../../../common/Preloader/Preloader';
import AboutMe from './AboutMe/AboutMe';
import FullName from './FullName/FullName';
import Photo from './Photo/Photo';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {

    if (props.profile == null) {
        return <Preloader />
    }

    return <div >


        <div >
            <img src="https://expresstricks.com/wp-content/uploads/2019/04/comments-for-beautiful-pictures.jpg"></img>
        </div>
        <div className={s.descriptionBlock}>
            <div className={s.photoName}>
                <Photo photo={props.profile.photos.large} />
                <AboutMe aboutMe={props.profile.aboutMe} />
            </div>
            <FullName fullName={props.profile.fullName} />


        </div>
    </div>
}



export default ProfileInfo;