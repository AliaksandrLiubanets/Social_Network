import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
  
  let postsElements =
    props.state.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} id={post.id} avatar={post.avatar} />);
  
  let newPostElement = React.createRef();

  let addPost = () => { //addPost название локальной функции.
    
    let text = newPostElement.current.value;
    props.addPost(text); // отправляем в state (BLL) новый пост.
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;