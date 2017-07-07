import React from 'react';

export default class Question extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      question: this.props.question
    }
  };
  
  render() {
    return (
      <tr>
        <td>{this.state.question.question}</td>
        <td>{this.state.question.answer}</td>
      </tr>
    )
  };

}
