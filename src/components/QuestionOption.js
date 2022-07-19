const QuestionOption = (props) => {
  const { text, handleClick, option, selected } = props;

  return (
    <div className="center question-option">
      <div className="question-text">{text}</div>
      <button
        onClick={(e) => {
          handleClick(e, `option${option}`);
        }}
        className="question-show-button"
      >
        Click
      </button>
      {selected && (
        <div className="selected-answer">You have selected this option</div>
      )}
    </div>
  );
};
export default QuestionOption;
