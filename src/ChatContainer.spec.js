import React from 'react';
import ChatContainer from "./ChatContainer";
import {render, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Chance from 'chance';

const chance = new Chance();

describe("ChatContainer", () => {
    let container;

    let properties;

    describe(("not connected to server"), () => {
        beforeEach(() => {
            properties = {
                connect: jest.fn(),
                connected: false,
                messageHistory: [chance.string(), chance.string()],
                send: jest.fn()
            };

            container = render(<ChatContainer {...properties} />);
        });

        it("shows message history", () => {
            const { queryByTestId } = container;
            const expectedHistory = properties.messageHistory.join(' ');

            const historyBox = queryByTestId('historybox');

            expect(historyBox).toHaveTextContent(expectedHistory);
        });

        it("performs provided action when send button is clicked", () => {
            const { queryByTestId } = container;
            const sendButton = queryByTestId('sendbutton');

            fireEvent.click(sendButton);

            expect(properties.send).toHaveBeenCalled();
        });

        it("should connect to server when not connected", () => {
            expect(properties.connect).toHaveBeenCalled();
        });
    });

    describe("connected to server", () => {
        beforeEach(() => {
            properties = {
                connect: jest.fn(),
                connected: true,
                messageHistory: [chance.string(), chance.string()],
                send: jest.fn()
            };

            container = render(<ChatContainer {...properties} />);
        });

        it("should not connect to server when already connected", () => {
            properties.connected = true;
            container = render(<ChatContainer {...properties} />);

            expect(properties.connect).not.toHaveBeenCalled();
        })
    });
});
