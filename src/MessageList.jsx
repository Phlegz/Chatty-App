import React, {Component} from 'react';
import Message from './Message.jsx';

// export default
class MessageList extends Component {
  render() {
    // console.log(this.props.messages);
    const messages = this.props.messages.map((message) => {
      return <Message
        key = {message.id}
        username = {message.username}
        content = {message.content}
      />
    })

    return (
      <div id="message-list">
        {messages}
      </div>
    );
  }
}
export default MessageList;
