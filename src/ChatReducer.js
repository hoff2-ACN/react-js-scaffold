export const sendMessageReducer = (state = [], action) => {
    return (action.type === 'SEND_MESSAGE') ?
        [...state, action.payload] :
        state;
};

export const connectionReducer = (state = false, action) => {
    return action.type === 'REDUX_WEBSOCKET::OPEN';
};
