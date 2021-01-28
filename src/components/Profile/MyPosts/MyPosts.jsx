import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

  let postsElements = 
  props.state.postsData.map( post => <Post message={ post.message } likesCount={ post.likesCount } id={ post.id } avatar={ post.avatar } />);

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }        
      </div>
    </div>
  )
}

export default MyPosts;