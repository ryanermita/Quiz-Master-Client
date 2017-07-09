import React from 'react';
import Questions from './Questions.jsx';
import NewQuestion from './NewQuestion.jsx';

export default class App extends React.Component {

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

  updateListOnCreate(item){
    let newQuestionList = this.state.questions.concat(item);
    this.setState({questions: newQuestionList});
  };

  updateListOnDelete(question){
    let newQuestionList = this.state.questions.filter(function(q){
      return question.id !== q.id;
    });
    this.setState({questions: newQuestionList});
  };

  render() {
    return (
      <div>
        <Questions questions={this.state.questions}
                   handleDeletedItem={this.updateListOnDelete.bind(this)} />
        <NewQuestion handleNewItem={this.updateListOnCreate.bind(this)} />
      </div>
    );
  }

}
