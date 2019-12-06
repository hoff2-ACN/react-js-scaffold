import React from 'react';
import {Provider} from "react-redux";
import ChatConnector from './ChatConnector';
import {applyMiddleware, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import {sendMessageReducer} from "./ChatReducer";

const reducers = {messageHistory: sendMessageReducer};

const prepareStore = (state) => {
    return createStore(combineReducers(reducers), state, applyMiddleware(thunk));
};

const store = prepareStore();

const ChatProvider = () => (
    <Provider store={store}>
        <ChatConnector/>
    </Provider>
);

export default ChatProvider;
