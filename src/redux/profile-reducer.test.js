import profileReducer, {
    createPost,
    deletePost,
    saveCitySuccess,
    saveNameSuccess
} from "./profile-reducer";

const state = {
    profile: {
        name: 'Old Name',
        city: 'Old City'
    },
    posts: [
        'post 1',
        'post 2',
        'post 3'
    ]
};

it('increments the number of posts', () => {
    const newState = profileReducer(state, createPost("text new post"));

    expect(newState.posts.length).toBe(4);
});

it('stores the new post text', () => {
    const newState = profileReducer(state, createPost("text new post"));

    expect(newState.posts[3]).toBe("text new post");
});

it('decrements the number of posts after deleting', () => {
    const newState = profileReducer(state, deletePost(0));

    expect(newState.posts.length).toBe(2);
});

it('updates city without changing profile type', () => {
    const newState = profileReducer(
        {...state, profile: {...state.profile, type: 'user'}},
        saveCitySuccess('Kyiv')
    );

    expect(newState.profile.city).toBe('Kyiv');
    expect(newState.profile.type).toBe('user');
});

it('updates user name without changing profile type', () => {
    const newState = profileReducer(
        {...state, profile: {...state.profile, type: 'user'}},
        saveNameSuccess('New Name')
    );

    expect(newState.profile.name).toBe('New Name');
    expect(newState.profile.type).toBe('user');
});
