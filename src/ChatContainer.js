import React from "react";
import PropTypes from 'prop-types';

const ChatContainer = (props) => {
    const history = () => {
        return props.messageHistory.join('\n');
    };

    return (
        <div>
            <div className="history">
                <textarea
                    data-testid="historybox"
                    onChange={() => {
                    }}
                    value={history()}
                />
            </div>
            <div className="message">
                <input/>
                <button
                    data-testid="sendbutton"
                    onClick={props.send}
                >
                    Send
                </button>
            </div>
        </div>
    );
};


ChatContainer.propTypes = {
    messageHistory: PropTypes.arrayOf(PropTypes.string),
    send: PropTypes.func
};

export default ChatContainer;
