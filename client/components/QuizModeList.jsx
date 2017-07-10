import React from 'react';
import QuizModeQuestion from './QuizModeQuestion.jsx';

export default class QuizModeList extends React.Component {

  render() {
    let that = this;
    let questions = this.props.questions.map(function(question){
        return (
          <QuizModeQuestion question={question} key={question.id} />
        );
      });

    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="col-md-6">Question</th>
              <th className="col-md-3"></th>
            </tr>
          </thead>
          <tbody>
            {questions}
          </tbody>
        </table>
      </div>
    );
  };
};
