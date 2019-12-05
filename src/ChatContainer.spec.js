import React from 'react';
import ChatContainer from "./ChatContainer";
import {render, fireEvent} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Chance from 'chance';

const chance = new Chance();

describe("ChatContainer", () => {
    let container;

    const properties = {
        messageHistory: [chance.string(), chance.string()],
        send: jest.fn(),
    };

    beforeEach(() => {
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
});
