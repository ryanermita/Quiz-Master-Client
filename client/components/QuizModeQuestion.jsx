import React from 'react';

export default class QuizModeQuestion extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      question: this.props.question,
      answerMode: false,
      answer: '',
      showCorrectLabel: false,
      showIncorrectLabel: false
    }
  };

  answerModeOn() {
    this.setState({answerMode: true})
  };

  answerModeOff() {
    this.setState({
      showIncorrectLabel: false,
      showCorrectLabel: false,
      answer: '',
      answerMode: false
    });
  };

  handleInputChange(e){
    this.setState({[e.target.name]: e.target.value})
  };

  submitAnswer(){
    let API_URL = 'http://localhost:3000/questions/';
    let that = this;
    let data = JSON.stringify({'quiz': this.state});

    fetch(API_URL + that.state.question.id + '/answer', {
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
      if(data.correct){
        that.setState({
          showCorrectLabel: true,
          showIncorrectLabel: false
        });

        setTimeout(function(){
          that.setState({
            showIncorrectLabel: false,
            showCorrectLabel: false,
            answer: '',
            answerMode: false
          });
        }, 1000);
      }else{
        that.setState({
          showCorrectLabel: false,
          showIncorrectLabel: true
        });
      }

    })
    .catch(function(err){
      console.log('submitAnswer', err);
    });

  };

  render() {

    if(this.state.showIncorrectLabel){
      var isCorrectLabel = (
        <span className="glyphicon glyphicon-remove pull-left" aria-hidden="true"
              style={{color: '#a94442', marginTop: '8px', marginRight: '5px'}}></span>
      );
    }else if(this.state.showCorrectLabel){
      var isCorrectLabel = (
        <span className="glyphicon glyphicon-ok pull-left" aria-hidden="true"
              style={{color: '#3c763d', marginTop: '8px', marginRight: '5px'}}></span>
      );
    }
    if(this.state.answerMode){
      var markup = (
        <tr>
          <td dangerouslySetInnerHTML={{__html: this.props.question.question }}>
          </td>
          <td className="text-center">
            {isCorrectLabel}
            <input className="form-control pull-left" 
                   style={{width: '140px'}}
                   name="answer"
                   value={this.state.answer} 
                   onChange={this.handleInputChange.bind(this)} />
            <button className="btn btn-info btn-sm"
                    onClick={this.answerModeOff.bind(this)} 
                    style={{marginRight: '5px', marginTop: '4px'}} >
              Cancel 
            </button>
            <button className="btn btn-info btn-sm"
                    onClick={this.submitAnswer.bind(this)} 
                    style={{marginRight: '5px', marginTop: '4px'}} >
              Submit Answer 
            </button>
          </td>
        </tr>
      )
    } else {
      var markup = (
        <tr>
          <td dangerouslySetInnerHTML={{__html: this.props.question.question }}>
          </td>
          <td className="text-center">
            <button className="btn btn-info btn-sm"
                    onClick={this.answerModeOn.bind(this)} >
              Answer Question 
            </button>
          </td>
        </tr>
      )
    }


    return markup;
  };
};
