import s from './Profile.module.css';
import './MyPosts/MyPosts';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return <div>
    <div>
      <img src="https://expresstricks.com/wp-content/uploads/2019/04/comments-for-beautiful-pictures.jpg"></img>
    </div>    
    <MyPosts  />
    

  </div>
}

export default Profile;