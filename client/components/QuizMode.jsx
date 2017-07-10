import React from 'react';
import QuizModeList from './QuizModeList.jsx';

export default class QuizMode extends React.Component {

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
    })
    .catch(function(err){
      console.log('getQuestionsList', err);
    });
  };

  componentDidMount() {
    this.getQuestionList();

  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1> Quiz Mode </h1>
              <h4>Test your knowledge by answering questions.</h4>
            <hr />
            <QuizModeList questions={this.state.questions} />
          </div>
        </div>
      </div>
    )
  };
}
