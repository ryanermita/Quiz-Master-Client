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

  closeModal(){
    this.setState({
      question: '',
      answer: ''
    });
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

      that.closeModalButton.click();
      that.props.handleNewItem(data.question);
    })
    .catch(function(err){
      console.log('submitQuestion', err);
    });

  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" data-toggle="modal" data-target="#createQuestionModal" >Add New Question</button>
        <div className="modal fade" tabIndex="-1" role="dialog" id="createQuestionModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"
                        ref={(button) => {this.closeModalButton = button; }}
                        onClick={this.closeModal.bind(this)}
                        aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Create New Question</h4>
              </div>
              <div className="modal-body">
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
              </div>
              <div className="modal-footer">
                <button type="button" onClick={this.closeModal.bind(this)} className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.submitQuestion.bind(this)} > Save New Question </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}
