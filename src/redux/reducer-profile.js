const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    postsData: [
        { id: 1, message: 'Hi, How are you?', likesCount: 15, avatar: 'https://img0.liveinternet.ru/images/attach/c/3/84/342/84342334_Girls29563.jpg' },
        { id: 2, message: 'It\'s my first post!', likesCount: 20, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckYackDCL1MOQdlEcs-zuAMwNJd8Gol_jVw&usqp=CAU' },
        { id: 3, message: 'Blabla', likesCount: 11, avatar: 'https://vjoy.cc/wp-content/uploads/2019/07/42-7.jpg' },
        { id: 4, message: 'Da', likesCount: 11, avatar: 'https://www.meme-arsenal.com/memes/72e09695c1914bab6839f87a78110201.jpg' },
    ],
    newPostText: 'newPostText',
}

const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
                avatar: 'https://www.meme-arsenal.com/memes/72e09695c1914bab6839f87a78110201.jpg',
            }

            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default reducerProfile;

