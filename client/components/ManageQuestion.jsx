import React from 'react';
import Questions from './Questions.jsx';
import NewQuestion from './NewQuestion.jsx';
import UpdateQuestion from './UpdateQuestion.jsx';
import NavBar from './NavBar.jsx';

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

  updateListOnUpdate(item){
    let updatedQuestionList = this.state.questions.map(function(q){
      if(item.id == q.id){
        q = item;
      }
      return q;
    });
    this.setState({questions: updatedQuestionList});
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1> Manage Questions </h1>
            <hr />
            <NewQuestion handleNewItem={this.updateListOnCreate.bind(this)} />
            <Questions questions={this.state.questions}
                       handleDeletedItem={this.updateListOnDelete.bind(this)}
                       handleUpdatedItem={this.updateListOnUpdate.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}
