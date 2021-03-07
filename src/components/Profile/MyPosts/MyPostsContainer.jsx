import React from 'react';
import {updateNewPostTextActionCreator, addPostActionCreator} from '../../../redux/reducer-profile';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  
  let state = props.store.getState();

  let addPost = () => {    
    props.store.dispatch(addPostActionCreator());             
  }

  let onPostChange = (text) => {      
    props.store.dispatch(updateNewPostTextActionCreator(text));    
  }
 
  return (
    <MyPosts 
    state={state.profilePage.postsData} 
    newPostText={state.profilePage.newPostText} 
    addPost={addPost} 
    updateNewPostText={onPostChange} />
  )
}

export default MyPostsContainer;