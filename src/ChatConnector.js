import {connect} from 'react-redux';
import ChatContainer from "./ChatContainer";
import {sendMessage} from "./ChatAction";

export const mapStateToProps = state => {
    return {
        messageHistory: state.messageHistory
    };
};

export const mapDispatchToProps = {send: sendMessage};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
