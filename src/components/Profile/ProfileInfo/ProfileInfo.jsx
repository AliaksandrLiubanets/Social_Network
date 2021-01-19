import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return <div >
        <div >
            <img src="https://expresstricks.com/wp-content/uploads/2019/04/comments-for-beautiful-pictures.jpg"></img>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
    </div>
    </div>
}

export default ProfileInfo;