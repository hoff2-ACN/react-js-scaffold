import {SEND_MESSAGE} from "./ChatAction";
import Chance from 'chance';
import {sendMessageReducer, connectionReducer} from './ChatReducer';

const chance = new Chance();

describe('ChatReducer', () => {
    describe('send message', () => {
        const initialState = [];

        it('adds the new message to the history', () => {
            const message = chance.string();
            const action = {
                type: SEND_MESSAGE,
                payload: message
            };
            const expectedResult = [message];
            const result = sendMessageReducer(initialState, action);
            expect(result).toEqual(expectedResult);
        });

        it('ignores other messages', () => {
            const action = {
                type: 'WHATEVER',
            };
            const result = sendMessageReducer(initialState, action);
            expect(result).toEqual(initialState);
        });
    });

    describe('connection reducer', () => {
        it('updates the store if action is a websocket open', () => {
            const action = {type: 'REDUX_WEBSOCKET::OPEN'};
            const result = connectionReducer(false, action);
            expect(result).toBe(true);
        });
    });
});
