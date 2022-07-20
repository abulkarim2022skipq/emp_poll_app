const QuestionOption = (props) => {
  const {
    text,
    handleClick,
    option,
    selected,
    votes,
    totalVotes,
    disableButton,
  } = props;

  return (
    <div className="center question-option">
      <div className="question-text">{text}</div>
      <button
        onClick={(e) => {
          handleClick(e, `option${option}`);
        }}
        disabled={disableButton ? true : false}
        className="question-show-button"
      >
        Click
      </button>
      {selected ? (
        <div className="selected-answer">
          {votes === 1
            ? "You have selected this option"
            : `You and ${votes - 1} other have selected this option`}
        </div>
      ) : (
        <div className="selected-answer">
          {votes === 1
            ? `${votes} person have selected this option`
            : `${votes} people have selected this option`}
        </div>
      )}
      {totalVotes > 0 && (
        <div className="question-option-percentage-div">
          <div className="question-option-percentage">
            <div
              className="question-option-percentage-show"
              style={{
                width: `${Math.round((votes / totalVotes) * 100)}%`,
              }}
            >
              <p>{Math.round((votes / totalVotes) * 100)}% votes</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default QuestionOption;
