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
              
              <h4>Features</h4>
              <ul>
                <li>Manage Questions</li>
                <li>Quiz Mode</li>
              </ul>

              <h4>Technologies</h4>
              <ul>
                <li>Rails 4.2 - use as the backend service. Implemented as API.</li>
                <li>ReactJS - use as the client service.</li>
                <li>Webpack</li>
                <li>Babel</li>
                <li>Yarn</li>
              </ul>

              <h4> Source codes</h4>
              <ul>
                <li>
                  <a target="_blank" href="https://github.com/ryanermita/Quiz-Master">Quiz Master API</a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/ryanermita/Quiz-Master-Client">Quiz Master Client</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
