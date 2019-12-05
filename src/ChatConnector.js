import {connect} from 'react-redux';
import ChatContainer from "./ChatContainer";

export const mapStateToProps = state => {
    return {
        messageHistory: []
    };
};

export const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
