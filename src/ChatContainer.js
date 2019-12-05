import React from "react";

const ChatContainer = (props) => {
    const history = () => {
        return props.messageHistory.join('\n');
    };

    return (
        <div>
            <div className="history">
                <textarea
                    value={history()}
                    data-testid="historybox"/>
            </div>
            <div className="message">
                <input/>
                <button>Send</button>
            </div>
        </div>
    );
};

export default ChatContainer;
