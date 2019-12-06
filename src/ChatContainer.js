import React, {useState} from "react";
import PropTypes from 'prop-types';

const ChatContainer = (props) => {
    const [input, setInput] = useState("");

    const history = () => {
        return props.messageHistory.join('\n');
    };

    const sendMessage = (event) => {
        event.preventDefault();
        event.stopPropagation();
        props.send(input);
        setInput('');
    };

    return (
        <div className="chat">
            <div className="row">
                <h2>{'Chat'}</h2>
            </div>
            <div className="history row">
                <textarea
                    data-testid="historybox"
                    onChange={() => {
                    }}
                    value={history()}
                />
            </div>
            <div className="message row">
                <form
                    onSubmit={sendMessage}
                >
                    <input
                        onChange={(event) => {
                            setInput(event.target.value)
                        }}
                        value={input}
                    />
                    <button
                        type="submit"
                        data-testid="sendbutton"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};


ChatContainer.propTypes = {
    messageHistory: PropTypes.arrayOf(PropTypes.string),
    send: PropTypes.func
};

export default ChatContainer;
