import React from 'react';
import DeleteQuestion from './DeleteQuestion.jsx'

export default class Question extends React.Component{

  render() {
    return (
      <tr>
        <td>{this.props.question.question}</td>
        <td>{this.props.question.answer}</td>
        <td>
          <button style={{marginRight: '5px'}} className="btn btn-info btn-sm">View</button>
          <button style={{marginRight: '5px'}} className="btn btn-primary btn-sm">Edit</button>
          <DeleteQuestion question={this.props.question} removeItem={this.props.onDelete} />
        </td>
      </tr>
    )
  };

}
