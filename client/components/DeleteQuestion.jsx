import React from 'react';

export default class DeleteQuestion extends React.Component{

  deleteQuestion(question){
    let API_URL = 'http://localhost:3000/questions/';
    let that = this;
    let data = JSON.stringify({'quiz': this.state});

    fetch(API_URL + that.props.question.id, {
      method: 'DELETE',
    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      that.props.removeItem(that.props.question);
    })
    .catch(function(err){
      console.log('submitQuestion', err);
    });
  }
  
  render() {
    return (
      <button className="btn btn-danger btn-sm" onClick={this.deleteQuestion.bind(this, this.props.question)} >Delete</button>
    )
  };
};
