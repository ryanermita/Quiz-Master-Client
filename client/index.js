import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import ManageQuestion from './components/ManageQuestion.jsx';
import QuizMode from './components/QuizMode.jsx';
import {
  BrowserRouter,
  NavLink,
  Route,
} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">
                QuizMaster
              </a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><NavLink exact activeClassName="activeNav" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="activeNav" to="/manage">Manage Question</NavLink></li>
                <li><NavLink activeClassName="activeNav" to="/quiz">Quiz Mode</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
        <Route exact path="/" component={App}/>
        <Route path="/manage" component={ManageQuestion}/>
        <Route path="/quiz" component={QuizMode}/>
      </div>
    </BrowserRouter>,
    document.getElementById('root')
);
