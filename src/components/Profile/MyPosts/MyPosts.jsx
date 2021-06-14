import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import { reduxForm } from 'redux-form'
import MessageSend from '../../../common/formControls/MessageSend';

class MyPosts extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state 
  }
  
  onAddPost = (formData) => {    
    this.props.addPost(formData.message);             
  }

  render () {

    console.log('Render MyPosts')

    let postsElements =
    this.props.state.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} id={p.id} avatar={p.avatar} />);
   
  return (    
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <ReduxMyPostForm onSubmit={this.onAddPost}/>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
  
  }
  
}

// const MyPostForm = (props) => {
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <div>
//         <Field component='textarea' name='onAddPost' />
//       </div>
//       <button>Send</button>
//     </form>
//   )
// }

// const ReduxMyPostForm = reduxForm({form: 'dialogsPost'})(MyPostForm)

const ReduxMyPostForm = reduxForm({ form: 'dialogsMessage'})(MessageSend)

export default MyPosts;