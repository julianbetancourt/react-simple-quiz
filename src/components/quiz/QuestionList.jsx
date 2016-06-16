import React from 'react';
import Question from './Question.jsx';

class QuestionList extends React.Component {
  render() {
    return(
      <div className="quesitons">
        {
          this.props.questions.map(question => {
            if (this.props.current === question.id) {
              return <Question question={question} key={question.id} {...this.props}/>
            }
          })
        }
      </div>
    );
  }
}

export default QuestionList;
