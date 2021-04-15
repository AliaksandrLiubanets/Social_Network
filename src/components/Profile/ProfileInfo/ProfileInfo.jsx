import storeContext from '../../../storeContext';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
   
    return <div >
        <div >
            <img src="https://expresstricks.com/wp-content/uploads/2019/04/comments-for-beautiful-pictures.jpg"></img>
        </div>
        <div className={s.descriptionBlock}>
            <div className={s.photoName}>
                <div >
                    <img className={s.photo} src={props.profile.photos.large} />
                </div>
                <div className={s.name}>{props.profile.fullName}</div>
            </div>
            <div className={s.userInfo}>{props.profile.aboutMe}</div>
            
        </div>
    </div>
}



export default ProfileInfo;