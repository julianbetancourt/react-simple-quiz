import React from 'react';

class BoxScore extends React.Component {
  render() {
    return(
      <div className="well">
        Question {this.props.current} out of {this.props.questions.length}
      </div>
    );
  }
}

export default BoxScore;
