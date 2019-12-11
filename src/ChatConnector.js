import {connect} from 'react-redux';
import ChatContainer from "./ChatContainer";
import {sendMessage, connectToServer} from "./ChatAction";

export const mapStateToProps = state => {
    return {
        messageHistory: state.messageHistory,
        connected: state.connected
    };
};

export const mapDispatchToProps = {
    send: sendMessage,
    connect: connectToServer
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
