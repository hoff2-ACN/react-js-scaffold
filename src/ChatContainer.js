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
                    value={history()}
                    onChange={()=>{}}
                    data-testid="historybox"/>
            </div>
            <div className="message">
                <input/>
                <button>Send</button>
            </div>
        </div>
    );
};


ChatContainer.propTypes = {
    messageHistory: PropTypes.arrayOf(PropTypes.string),
};

export default ChatContainer;
