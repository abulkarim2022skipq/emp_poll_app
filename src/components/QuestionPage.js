import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleAnswerSelected } from "../actions/questions";
import QuestionOption from "./QuestionOption";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    const params = useParams();

    return <Component {...props} params={params}></Component>;
  };

  return ComponentWithRouterProp;
};

const QuestionPage = (props) => {
  const { question, dispatch, authedUser } = props;

  console.log("question", question);
  const handleClick = (e, option) => {
    console.log(option);
    dispatch(handleAnswerSelected(question, option));
  };

  const checkSeletctedOption = (option) => {
    return question[option].votes.includes(authedUser);
  };

  if (question === undefined) {
    return <p>This Question doesn't exist</p>;
  }

  return (
    <div>
      <div className="poll-by center">Poll by {question.author}</div>
      <div className="avatar-big center">
        <img src={question.avatar}></img>
      </div>
      <div className="poll-by center">Would you Rather?</div>
      <div className="question-options">
        <QuestionOption
          handleClick={handleClick}
          option="One"
          text={question.optionOne.text}
          selected={checkSeletctedOption("optionOne")}
        ></QuestionOption>
        <QuestionOption
          handleClick={handleClick}
          option="Two"
          text={question.optionTwo.text}
          selected={checkSeletctedOption("optionTwo")}
        ></QuestionOption>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }, props) => {
  const { id } = props.params;

  return {
    question: questions[id],
    authedUser,
  };
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
