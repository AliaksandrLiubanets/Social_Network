import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

  // let postsData = [
  //   {id: 1, message: 'Hi, How are you?', likesCount: 15, avatar: 'data:image/jpeg;base64,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'},
  //   {id: 2, message: 'It\'s my first post!', likesCount: 20, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckYackDCL1MOQdlEcs-zuAMwNJd8Gol_jVw&usqp=CAU'},
  //   {id: 3, message: 'Blabla', likesCount: 11, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckYackDCL1MOQdlEcs-zuAMwNJd8Gol_jVw&usqp=CAU'},
  //   {id: 4, message: 'Da', likesCount: 11, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckYackDCL1MOQdlEcs-zuAMwNJd8Gol_jVw&usqp=CAU'},
  // ]

  let postsElements = 
  props.posts.map( post => <Post message={ post.message } likesCount={ post.likesCount } id={ post.id } avatar={ post.avatar } />);

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