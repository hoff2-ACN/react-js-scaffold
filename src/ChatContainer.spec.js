import React from 'react';
import ChatContainer from "./ChatContainer";
import {render} from '@testing-library/react';
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
        const historyBox = queryByTestId('historybox');
        const contents = historyBox.innerHTML;
        expect(contents).toBe(properties.messageHistory.join('\n'));
    });
});
