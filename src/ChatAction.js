import {connect} from "@giantmachines/redux-websocket/dist";
export const SEND_MESSAGE = "SEND_MESSAGE";

export const connectToServer = () => {
    return (dispatch, getState) => {
        if (!getState().connected) {
            dispatch(connect("ws://localhost:8080"));
        }
    }
};

export const sendMessage = (message) => {
    return dispatch => {
        dispatch({
            type: SEND_MESSAGE,
            payload: message
        });
    }
};
