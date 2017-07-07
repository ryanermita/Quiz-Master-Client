import React from 'react';
import Question from './Question.jsx'

export default class Questions extends React.Component {

  constructor() {
    super()

    this.state = {
      questions: []
    }
  };

  getQuestionList() {
    let API_URL = 'http://localhost:3000/';
    let that = this;

    // Why do I have to call then twice?
    fetch(API_URL + 'questions/')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      that.setState({questions: data.questions});
      console.log('state', that.state.questions);
    })
    .catch(function(err){
      console.log('getQuestionsList', err);
    });
  };

  componentDidMount() {
    this.getQuestionList();
  };

  render() {
    let that = this;
    let questions = this.state.questions.map(function(question){
        return (
          <Question question={question} key={question.id} />
        );
      });

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
              <th>Action</th>
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
