import React from 'react';
import Questions from './Questions.jsx';
import NewQuestion from './NewQuestion.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Questions />
        <NewQuestion />
      </div>
    );
  }

}
