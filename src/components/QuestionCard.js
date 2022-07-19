import { useNavigate } from "react-router-dom";
import { formatDate } from "../utils/api";
import { setPageLocation } from "../actions/nav";
import { connect } from "react-redux";

const QuestionCard = (props) => {
  const { question, dispatch } = props;

  const navigate = useNavigate();

  const handleShow = (id) => {
    dispatch(setPageLocation(""));
    navigate(`/question/${id}`);
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

export default connect()(QuestionCard);
