import React, {Component} from "react";
import MessageList from "./MessageList.jsx";
import ChatBar from "./ChatBar.jsx";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = data;
    this.newMessage = this.newMessage.bind(this);
  }

  newMessage(username = "Anonymous", content) {
    const previousUser = this.state.currentUser.name || "Anonymous";
    if (username !== previousUser) {
      const nameChangeMessage = {
        username,
        content: `${previousUser} changed their name to ${username}`,
        type: "postNotification"
      };
      this.setState({currentUser: {name: username}});
      this.ws.send(JSON.stringify(nameChangeMessage));
    }
    const newMessage = {
      username,
      content,
      type: "postMessage"
    };
    this.ws.send(JSON.stringify(newMessage));
  }

  newMessage(username, content) {
    // console.log(content);
    this.setState({
      messages: this.state.messages.concat({id: this.state.messages.length+1, username: username || this.state.currentUser.name, content:content}),
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <span className="user-num-section">Total users in channel:{ this.state.userNum }</span>
        </nav>
        <MessageList messages={ this.state.messages } />
        <ChatBar newMessage={ this.newMessage } />
      </div>
    );
  }

}
export default App;
