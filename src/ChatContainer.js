import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';

const ChatContainer = (props) => {
    const messageHistory = props.messageHistory;
    const [historyBox, setHistoryBox] = useState(null);

    const resetHistoryScroll = () => {
        if (historyBox) {
            historyBox.scrollTop = historyBox.scrollHeight;
        }
    };

    useEffect(resetHistoryScroll, [messageHistory]);

    const formattedHistory = () => {
        return props.messageHistory.join('\n');
    };

    const [input, setInput] = useState("");

    const sendMessage = (event) => {
        event.preventDefault();
        event.stopPropagation();
        props.send(input);
        // todo: this but only on change
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
                    ref={(el) => setHistoryBox(el)}
                    value={formattedHistory()}
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
