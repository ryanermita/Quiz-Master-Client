import React from 'react';
import DeleteQuestion from './DeleteQuestion.jsx'
import UpdateQuestion from './UpdateQuestion.jsx'
import ViewQuestion from './ViewQuestion.jsx'

export default class Question extends React.Component{

  render() {
    return (
      <tr>
        <td dangerouslySetInnerHTML={{__html: this.props.question.question }}>
        </td>
        <td>{this.props.question.answer}</td>
        <td>
          <ViewQuestion question={this.props.question.question} 
                        answer={this.props.question.answer}
                        question_id={this.props.question.id} />
          <UpdateQuestion question={this.props.question.question} 
                          answer={this.props.question.answer}
                          question_id={this.props.question.id} 
                          updateItem={this.props.onUpdate} />
          <DeleteQuestion question={this.props.question} removeItem={this.props.onDelete} />
        </td>
      </tr>
    )
  };

}
