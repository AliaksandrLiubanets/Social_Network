import reducerProfile, { addPostActionCreator } from "./reducer-profile";

test('postData length should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("postText")
    let state = {
        postsData: [
            { id: 1, message: 'Hi, How are you?', likesCount: 15, avatar: 'https://img0.liveinternet.ru/images/attach/c/3/84/342/84342334_Girls29563.jpg' },
            { id: 2, message: 'Hi, ?', likesCount: 5, avatar: 'https://img0.liveinternet.ru/images/attach/c/3/84/342/84342334_Girls29563.jpg' },
            { id: 3, message: 'Hi you?', likesCount: 1, avatar: 'https://img0.liveinternet.ru/images/attach/c/3/84/342/84342334_Girls29563.jpg' }
        ]
    }
    // 2. action    
    let newState = reducerProfile({ state }, { action })

    // 3. expectation
    expect(newState.postsData.length).toBe(4)    

    // render(<App />);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});
