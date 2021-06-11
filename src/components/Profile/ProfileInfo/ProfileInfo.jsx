import Preloader from '../../../common/Preloader';
import FullName from './FullName/FullName';
import Job from './Job/Job';
import JobDescription from './JobDescription/JobDescription';
import Photo from './Photo/Photo';
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    
    if (props.profile == null) {
        return <Preloader />
    }

    return <>
        <div className={s.descriptionBlock}>
            <div className={s.photoName}>
                <Photo photo={props.profile.photos.large} />
                <FullName fullName={props.profile.fullName} />                
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <Job job={props.profile.lookingForAJob} />
            <JobDescription jobDescription={props.profile.lookingForAJobDescription} /> 
            <div>UserId: {props.profile.userId}</div>           
        </div>
    </>
}

export default ProfileInfo;

