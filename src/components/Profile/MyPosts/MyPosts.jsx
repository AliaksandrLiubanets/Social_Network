import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
  
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} avatar={p.avatar} />);
  
  let newPostElement = React.createRef();

  let addPost = () => { //addPost название локальной функции.    
    props.addPost(); // отправляем в state (BLL) новый пост.       
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    console.log(text);     
    props.updateNewPostText(text);    
  }
 
  return (
    
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea  onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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