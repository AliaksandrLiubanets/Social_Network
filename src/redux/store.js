// import  reducerProfile  from './reducer-profile';
import reducerDialogs from './reducer-dialogs';
import reducerProfile from './reducer-profile';
import reducerSidebar from './reducer-sidebar';

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: 'Hi, How are you?', likesCount: 15, avatar: 'https://img0.liveinternet.ru/images/attach/c/3/84/342/84342334_Girls29563.jpg' },
                { id: 2, message: 'It\'s my first post!', likesCount: 20, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckYackDCL1MOQdlEcs-zuAMwNJd8Gol_jVw&usqp=CAU' },
                { id: 3, message: 'Blabla', likesCount: 11, avatar: 'https://vjoy.cc/wp-content/uploads/2019/07/42-7.jpg' },
                { id: 4, message: 'Da', likesCount: 11, avatar: 'https://www.meme-arsenal.com/memes/72e09695c1914bab6839f87a78110201.jpg' },
            ],
            newPostText: 'newPostText',
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Dimych', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUa__Y_-g-Hqiasz_OgSIhk_N5VHcbRBc3Ng&usqp=CAU' },
                { id: 2, name: 'Andrew', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaIeEcKGjyP_NWQWd-8pRuJiR_ku780dyUQ&usqp=CAU' },
                { id: 3, name: 'Sveta', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OCIzl9399tApSHYiacA8OfhhOT-_zQKcxQ&usqp=CAU' },
                { id: 4, name: 'Sasha', avatar: 'https://i.pinimg.com/564x/98/b2/88/98b28840d82a8ec637642f4285a3f38a.jpg' },
                { id: 5, name: 'Victor', avatar: 'https://i.pinimg.com/originals/06/2b/c9/062bc9095337818bb479b69f9d807e53.jpg' },
                { id: 6, name: 'Valera', avatar: 'https://i.pinimg.com/originals/f4/05/4c/f4054c3db50a08c2f266e82b44b5ca90.jpg' },
            ],
            messagesData: [
                { id: 1, message: 'Dimych say: Hi' },
                { id: 2, message: 'Andrey say: How is it going?' },
                { id: 3, message: 'Sveta say: Hello everyone' },
                { id: 4, message: 'Sasha say: Yo' },
                { id: 5, message: 'Victor say: Yo' },
                { id: 6, message: 'Valera Say: Yo' },
            ],
            newMessageBody: '',
            someAvatarAndName: { id: 7, name: 'Somebody', avatar: 'https://live.warthunder.com/style/img/no_avatar.jpg' }
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Andrew', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBaIeEcKGjyP_NWQWd-8pRuJiR_ku780dyUQ&usqp=CAU' },
                { id: 2, name: 'Sasha', avatar: 'https://i.pinimg.com/564x/98/b2/88/98b28840d82a8ec637642f4285a3f38a.jpg' },
                { id: 3, name: 'Sveta', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9OCIzl9399tApSHYiacA8OfhhOT-_zQKcxQ&usqp=CAU' },
                // {id: 4, name: 'Valera', avatar: 'https://i.pinimg.com/originals/f4/05/4c/f4054c3db50a08c2f266e82b44b5ca90.jpg'},
            ],
        }
    },
    _callSubscriber() {
        console.log('Temporary function');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        reducerProfile(this.getState().profilePage, action);

        reducerDialogs(this.getState().dialogsPage, action);

        reducerSidebar(this.getState().sidebar, action);
       
        this._callSubscriber(this._state);
    },
}

export default store;
window.store = store;