import { connect } from "react-redux";
import Question from "./QuestionCard";

const QuestionContainer = (props) => {
  const { title, questions } = props;

  return (
    <div className="questions-container-div">
      <div className="center question-type-heading">
        <h3>{title}</h3>
      </div>
      <div>
        <ul className="questions-container">
          {questions.map((question) => (
            <Question key={question.id} question={question}></Question>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions }, props) => {
  const sortedQuestions = props.questions
    .map((q) => questions[q])
    .sort((a, b) => b.timestamp - a.timestamp);
  return {
    questions: sortedQuestions,
  };
};

export default connect(mapStateToProps)(QuestionContainer);
