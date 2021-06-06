import profileReducer, {createPost, deletePost} from "./profile-reducer";
let state = {
    posts: [
        'post 1',
        'post 2',
        'post 3'
    ]
};
it('length of posts should be incremented', () => {
    // 1. test data
    let action = createPost("text new post")
    // 2. action
    let  newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(4);
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = createPost("text new post")
    // 2. action
    let  newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[3]).toBe("text new post");
});

it('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(0);
    // 2. action
    let  newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});