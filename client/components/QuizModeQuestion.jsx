import React from 'react';

export default class QuizModeQuestion extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      question: this.props.question,
      answerMode: false
    }
  };

  answerModeOn() {
    this.setState({answerMode: true})
  };

  answerModeOff() {
    this.setState({answerMode: false})
  };

  render() {

    if(this.state.answerMode){
      var markup = (
        <tr>
          <td>{this.props.question.question}</td>
          <td className="text-center">
            <input className="form-control" />
            <button className="btn btn-info btn-sm"
                    onClick={this.answerModeOff.bind(this)} 
                    style={{marginRight: '5px', marginTop: '4px'}} >
              Cancel 
            </button>
            <button className="btn btn-info btn-sm"
                    style={{marginRight: '5px', marginTop: '4px'}} >
              Submit Answer 
            </button>
          </td>
        </tr>
      )
    } else {
      var markup = (
        <tr>
          <td>{this.props.question.question}</td>
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
