export const sendMessageReducer = (state, action) => {
    return [...state, action.payload];
};
