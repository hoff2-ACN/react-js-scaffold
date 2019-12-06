import React, {useState} from "react";
import PropTypes from 'prop-types';

const ChatContainer = (props) => {
    const [input, setInput] = useState("");

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
                <input
                    onChange={(event) => {setInput(event.target.value)}}/>
                <button
                    data-testid="sendbutton"
                    onClick={() => {props.send(input)}}
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
