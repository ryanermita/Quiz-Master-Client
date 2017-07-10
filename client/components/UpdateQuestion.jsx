import React from 'react';
import RichTextEditor from 'react-rte';

export default class UpdateQuestion extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      question: RichTextEditor.createValueFromString(this.props.question, 'html'),
      answer: this.props.answer,
      question_id: this.props.question_id
    }

  };

  onChange(value) {
    this.setState({question: value})
  };

  handleInputChange(e){
    this.setState({[e.target.name]: e.target.value})
  };

  updateQuestion() {
    let API_URL = 'http://localhost:3000/questions/';
    let that = this;
    let data = JSON.stringify({'quiz':
                                {'question': this.state.question.toString('html'),
                                 'answer': this.state.answer}
                              });

    fetch(API_URL + that.state.question_id, {
      method: 'PUT',
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
      that.closeModalButton.click();
      that.props.updateItem(data.question);
    })
    .catch(function(err){
      console.log('submitQuestion', err);
    });
  };

  render() {
    return (
      <div>
        <button style={{marginRight: '5px'}} className="pull-left btn btn-primary btn-sm" 
                data-toggle="modal" data-target={"#" + this.state.question_id} > Update</button>
        <div className="modal fade" tabIndex="-1" role="dialog" id={this.state.question_id}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"
                        ref={(button) => {this.closeModalButton = button; }}
                        aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">Update Question</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Question</label>
                  <RichTextEditor value={this.state.question} onChange={this.onChange.bind(this)} />
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
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button onClick={this.updateQuestion.bind(this)} type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

};
