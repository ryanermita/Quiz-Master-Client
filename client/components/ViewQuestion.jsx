import React from 'react';

export default class ViewQuestion extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      question: this.props.question,
      answer: this.props.answer,
      question_id: this.props.question_id
    };

  };

  render() {
    return (
      <div>
        <button style={{marginRight: '5px'}} className="pull-left btn btn-info btn-sm" 
                data-toggle="modal" data-target={"#view-" + this.state.question_id} > View</button>
        <div className="modal fade" tabIndex="-1" role="dialog" id={"view-" + this.state.question_id}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"
                        ref={this.closeModal}
                        aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title">View Question</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label>Question</label>
                  <p>{this.state.question}</p>
                </div>
                <div className="form-group">
                  <label>Answer</label>
                  <em> {this.state.answer}</em>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

}
