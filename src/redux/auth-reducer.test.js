import authReducer, {toggleIsFetching} from "./auth-reducer";

it('updates auth fetching state', () => {
    const initialState = {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
        isFetching: false,
        token: null
    };

    const loadingState = authReducer(initialState, toggleIsFetching(true));
    const finishedState = authReducer(loadingState, toggleIsFetching(false));

    expect(loadingState.isFetching).toBe(true);
    expect(finishedState.isFetching).toBe(false);
});
