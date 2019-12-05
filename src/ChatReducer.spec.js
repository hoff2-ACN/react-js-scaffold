import {SEND_MESSAGE} from "./ChatAction";
import Chance from 'chance';
import {sendMessageReducer} from './ChatReducer';

const chance = new Chance();

describe('ChatReducer', () => {
    const initialState = [];

    describe('send message', () => {
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
    });
});
