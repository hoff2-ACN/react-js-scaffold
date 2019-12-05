import Chance from 'chance';
import {SEND_MESSAGE, sendMessage} from "./ChatAction";

const chance = new Chance();
const dispatchSpy = jest.fn();

describe("Chat Action Creator", () => {
    test("should dispatch action when message sent", () => {
        const message = chance.string();

        const expectedAction = {
            type: SEND_MESSAGE,
            payload: message
        };

        sendMessage(message)(dispatchSpy);

        expect(dispatchSpy).toHaveBeenCalledWith(expectedAction);
    });
});
