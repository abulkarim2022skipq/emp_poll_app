const QuestionOption = ({ text }) => {
  return (
    <div className="center question-option">
      <div className="question-text">{text}</div>
      <button className="question-show-button"> Click </button>
    </div>
  );
};
export default QuestionOption;
