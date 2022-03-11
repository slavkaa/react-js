import React, {useState} from 'react';

class InputText extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textData: 'DEFAULT-TEXT'
    }
  }

  onTextChange(event) {
    this.setState({textData: event.target.value})
  }

  render() {
    return (
      <div>
        <div>{this.state.textData}</div>
        <input type="text" value={this.state.textData} onChange={event => this.onTextChange(event)}/>
      </div>
    )
  }
}

export default InputText;