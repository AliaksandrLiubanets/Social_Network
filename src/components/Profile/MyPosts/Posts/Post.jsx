import s from './Post.module.css'

const Post = (props) => {
  
  return (
    <div className={s.posts}>
      <div className={s.item}>
        <img src={props.avatar}></img>
        <span className={s.post}>{props.message}</span>
        <div className={s.likes}>
          <span>like</span> {props.likesCount}
        </div>
      </div>
    </div>
  )
}

export default Post;