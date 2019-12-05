import React from 'react';
import ChatContainer from "./ChatContainer";
import {render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Chance from 'chance';

const chance = new Chance();

describe("ChatContainer", () => {
    let container;

    const properties = {
        messageHistory: [chance.string(), chance.string()],
    };

    beforeEach(() => {
        container = render(<ChatContainer {...properties} />);
    });

    test("shows message history", () => {
        const { queryByTestId } = container;
        const expectedHistory = properties.messageHistory.join(' ');

        const historyBox = queryByTestId('historybox');

        expect(historyBox).toHaveTextContent(expectedHistory);
    });
});
