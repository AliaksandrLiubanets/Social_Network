import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return <div>
    <ProfileInfo />
    <MyPosts posts={props.profilePage.postsData}
             newPostText={props.profilePage.newPostText}              
             addPost={props.addPost} 
             updateNewPostText={props.updateNewPostText} />
  </div>
}

export default Profile;

