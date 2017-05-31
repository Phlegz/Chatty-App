import React, {Component} from 'react';

class ChatBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      content: ''
    }
    this.onContent = this.onContent.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  onContent(event) {
    this.setState({
      content: event.target.value
    });
  }

  onEnter(e) {
    if (e.key === 'Enter') {
      const length = this.state.content.length;
      if (length > 0) {
        this.props.newMessage(this.state.username,this.state.content);
        const state = this.state.content = '';
        this.setState({state:state});
      }
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)"
          onChange={this.onNameChange} value={this.state.username} />
        <input className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          onChange={ this.onContent }
          onKeyDown={this.onEnter}
          value = {this.state.content}
         />
      </footer>
    );
  }

}
export default ChatBar;
