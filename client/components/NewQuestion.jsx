import React from 'react';
import Questions from './Questions.jsx';

export default class NewQuestion extends React.Component {
  
  constructor(){
    super();

    this.state = {
      question: '',
      answer: ''
    }
  };


  handleInputChange(e){
    this.setState({[e.target.name]: e.target.value})
  };

  submitQuestion() {
    let API_URL = 'http://localhost:3000/questions/';
    let that = this;
    let data = JSON.stringify({'quiz': this.state});

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      that.setState({
        question: '',
        answer: ''
      });

      that.props.handleNewItem(data.question);
    })
    .catch(function(err){
      console.log('submitQuestion', err);
    });

  };

  render() {
    return (
      <div>
        <div className="form-group">
          <label>Question</label>
          <input type="text" className="form-control"
                 name="question"
                 value={this.state.question}
                 onChange={this.handleInputChange.bind(this)} />
        </div>
        <div className="form-group">
          <label>Answer</label>
          <input type="text" className="form-control"
                 value={this.state.answer}
                 name="answer"
                 onChange={this.handleInputChange.bind(this)} />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" onClick={this.submitQuestion.bind(this)} > Save New Question </button>
        </div>
      </div>
    )
  };
}
