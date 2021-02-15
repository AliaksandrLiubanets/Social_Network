import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import state from './redux/state';
import App from './App';
import { subscribe } from './redux/state';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';
import { addMessage } from './redux/state';
import { updateNewMessageText } from './redux/state';
import { addSomeAvatarAndName } from './redux/state';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
        addSomeAvatarAndName={addSomeAvatarAndName} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
