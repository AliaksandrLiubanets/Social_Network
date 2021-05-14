import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import MyPostsForm from './MyPostsForm'

const MyPosts = (props) => {

  let postsElements =
    props.state.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} avatar={p.avatar} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  const setPostProfile = (dataForm) => {
    props.setPost(dataForm)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>Last post: {props.postMessage.message}</div>
      <div>
      <MyPostsForm onSubmit={setPostProfile} />
        {/* <div>
          <textarea  onChange={onPostChange} ref={newPostElement} value={props.newPostText} autoFocus/>
        </div> */}
        {/* <div>
          <button onClick={onAddPost}>Add post</button>
        </div> */}
        
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;