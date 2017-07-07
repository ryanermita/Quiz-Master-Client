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
          <button style={{marginRight: '5px'}} className="btn btn-info btn-sm">View</button>
          <button style={{marginRight: '5px'}} className="btn btn-primary btn-sm">Edit</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </td>
      </tr>
    )
  };

}
