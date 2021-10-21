import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  remainingCharactersInMessage = () => {
    return this.props.maxChars - this.state.message.length;
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={(event) => this.handleChange(event)}
          value={this.state.message}
        />
        <span>{this.remainingCharactersInMessage()}</span>
      </div>
    );
  }
}

export default TwitterMessage;
