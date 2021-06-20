import Preloader from '../../../common/Preloader';
import FullName from './FullName/FullName';
import Job from './Job/Job';
import JobDescription from './JobDescription/JobDescription';
import Photo from './Photo/Photo';
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    
    if (profile == null) {
        return <Preloader />
    }

    return <>
        <div className={s.descriptionBlock}>
            <div className={s.photoName}>
                <Photo photo={profile.photos.large} />
                <FullName fullName={profile.fullName} />                
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <Job job={profile.lookingForAJob} />
            <JobDescription jobDescription={profile.lookingForAJobDescription} /> 
            <div>UserId: {profile.userId}</div>           
        </div>
    </>
}

export default ProfileInfo;

