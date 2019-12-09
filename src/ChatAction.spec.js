import * as sinon from "sinon";
import Chance from 'chance';
import {connectToServer, SEND_MESSAGE, sendMessage} from "./ChatAction";
const chance = new Chance();

describe("Chat Action Creator", () => {
    let dispatchSpy;

    beforeEach(() => {
        dispatchSpy = sinon.stub();
    });

    test("should dispatch action when message sent", () => {
        const message = chance.string();

        const expectedAction = {
            type: SEND_MESSAGE,
            payload: message
        };

        sendMessage(message)(dispatchSpy);

        expect(dispatchSpy.args[0][0].type).toEqual('REDUX_WEBSOCKET::SEND');
        expect(dispatchSpy.calledWithExactly(expectedAction)).toEqual(true);
    });

    test("should connect to store", () => {
        connectToServer()(dispatchSpy);

        expect(dispatchSpy.args[0][0].type).toEqual("REDUX_WEBSOCKET::CONNECT");
    });
});
