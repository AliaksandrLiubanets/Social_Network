import { connect } from 'react-redux';
import { updateNewPostTextActionCreator, addPostActionCreator, setPostMessageAC } from '../../../redux/reducer-profile';
import MyPosts from './MyPosts';

// const MyPostsContainer = () => {

//   return <storeContext.Consumer>
//     {store => {
//       let state = store.getState();

//       let addPost = () => {
//         store.dispatch(addPostActionCreator());
//       }

//       let onPostChange = (text) => {
//         store.dispatch(updateNewPostTextActionCreator(text));
//       }
//       return <MyPosts
//         state={state.profilePage.postsData}
//         newPostText={state.profilePage.newPostText}
//         addPost={addPost}
//         updateNewPostText={onPostChange} />
//     }
//     }
//   </storeContext.Consumer>
// }

const mapStateToProps = (state) => {
  return {
      state: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText,
      postMessage: state.profilePage.postMessage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      addPost: () => {
        dispatch(addPostActionCreator());
      },
      updateNewPostText: (text) => {
        dispatch(updateNewPostTextActionCreator(text));          
      },
      setPost: (message) => {
        dispatch(setPostMessageAC(message))
      }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;