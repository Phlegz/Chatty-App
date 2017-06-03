import React, {Component} from "react";

class Message extends Component {
//TODO break into seperate components
  parseType() {
    const { username, content, type, color } = this.props;
    switch(type) {
      case "postNotification":
        return (
          <div className="message system">
            {content}
          </div>
        );
        break;
      case "postMessage":
        return (
          <div className="message">
            <span className="message-username" style={{color}}>{username}</span>
            <span className="message-content">{content}</span>
          </div>
        );
        break;
    }
  }

  render() {
    return (this.parseType());
  }

}
export default Message;
