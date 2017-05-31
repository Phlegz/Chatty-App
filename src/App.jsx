import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
const data = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id: 2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
    this.newMessage = this.newMessage.bind(this);

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
        </nav>
        <MessageList messages = { this.state.messages } />
        <ChatBar
          // user = { this.state.currentUser }
          newMessage = { this.newMessage }/>
      </div>
    );
  }
}
export default App;
