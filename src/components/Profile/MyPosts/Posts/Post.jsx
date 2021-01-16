import s from './Post.module.css'

const Post = (props) => {

  return (
    <div className={s.posts}>
      <div className={s.item}>
        <img src= { props.avatar }></img>
        {props.message}
        <div>
          <span>like</span> { props.likesCounts }
        </div>
      </div>
    </div>  
    )  
}

export default Post;