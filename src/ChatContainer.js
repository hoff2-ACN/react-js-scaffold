import React from "react";

const ChatContainer = () => {
    return (
        <div>
            <div className="history">
                <textarea/>
            </div>
            <div className="message">
                <input/>
                <button>Send</button>
            </div>
        </div>
    );
};

export default ChatContainer;
