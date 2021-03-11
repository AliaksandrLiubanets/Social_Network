import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/reducer-profile';
import storeContext from '../../../storeContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

  return <storeContext.Consumer>
    {store => {
      let state = store.getState();

      let addPost = () => {
        store.dispatch(addPostActionCreator());
      }

      let onPostChange = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text));
      }
      return <MyPosts
        state={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}
        addPost={addPost}
        updateNewPostText={onPostChange} />
    }
    }
  </storeContext.Consumer>
}


export default MyPostsContainer;