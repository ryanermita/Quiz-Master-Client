import React from 'react';
import ManageQuestion from './ManageQuestion.jsx';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="jumbotron">
              <center>
                <h1> Quiz Master </h1>
              </center>
            </div>
            <div className="col-md-5 col-md-offset-4">
              <p>
                My implementation of Quipper's coding test.
              </p>
              <p>
                Features:
                <li>Manage Questions</li>
                <li>Quiz Mode</li>
              </p>
              <p>
                Technologies:
                <ul>
                  <li>Rails 4.2 - use as the backend service. Implemented as API.</li>
                  <li>ReactJS - use as the client service.</li>
                </ul>
              </p>
              <p>
                Source codes:
                <ul>
                  <li>
                    <a target="_blank" href="https://github.com/ryanermita/Quiz-Master">Quiz Master API</a>
                  </li>
                  <li>
                    <a target="_blank" href="https://github.com/ryanermita/Quiz-Master-Client">Quiz Master Client</a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
