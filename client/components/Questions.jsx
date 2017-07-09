import React from 'react';
import Question from './Question.jsx'

export default class Questions extends React.Component {

  render() {
    let that = this;
    let questions = this.props.questions.map(function(question){
        return (
          <Question question={question} key={question.id} />
        );
      });

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="col-md-6">Question</th>
              <th className="col-md-3">Answer</th>
            </tr>
          </thead>
          <tbody>
            {questions}
          </tbody>
        </table>
      </div>
    );
  }

}
