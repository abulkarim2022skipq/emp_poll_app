import { formatDate } from "../utils/api";

const QuestionCard = ({ question }) => {
  const handleShow = (id) => {
    console.log("Navigate to ", id);
  };

  return (
    <div className="question-card center">
      <div className="question-author">{question.author}</div>
      <div className="question-timestamp">{formatDate(question.timestamp)}</div>
      <div className="question-show-button-div">
        <button
          className="question-show-button"
          onClick={() => {
            handleShow(question.id);
          }}
        >
          Show
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
