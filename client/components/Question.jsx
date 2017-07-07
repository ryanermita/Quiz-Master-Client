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
        <td>
          <center>
            <button className="btn btn-info">View</button>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-danger">Delete</button>
          </center>
        </td>
      </tr>
    )
  };

}
