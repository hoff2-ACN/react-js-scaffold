export const SEND_MESSAGE = "SEND_MESSAGE";

export const sendMessage = (message) => {
    return dispatch => {
        dispatch({
            type: SEND_MESSAGE,
            payload: message
        });
    }
};
