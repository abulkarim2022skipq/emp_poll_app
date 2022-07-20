import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleAnswerSelected } from "../actions/shared";
import QuestionOption from "./QuestionOption";
import Header from "./Header";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    const params = useParams();

    return <Component {...props} params={params}></Component>;
  };

  return ComponentWithRouterProp;
};

const QuestionPage = (props) => {
  const { question, dispatch, user } = props;

  const handleClick = (e, option) => {
    dispatch(handleAnswerSelected(question, option));
  };

  const checkSeletctedOption = (option) => {
    return question[option].votes.includes(user.id);
  };

  if (question === undefined) {
    return <p>This Question doesn't exist</p>;
  }

  return (
    <div>
      <Header />
      <div style={{ marginBottom: "100px" }}>
        <div className="poll-by center">Poll by {question.author}</div>
        <div className="avatar-big center">
          <img src={user.avatarURL} alt="avatar"></img>
        </div>
        <div className="poll-by center">Would you Rather?</div>
        <div className="question-options">
          <QuestionOption
            handleClick={handleClick}
            option="One"
            text={question.optionOne.text}
            selected={checkSeletctedOption("optionOne")}
            votes={question.optionOne.votes.length}
            totalVotes={
              question.optionOne.votes.length + question.optionTwo.votes.length
            }
            disableButton={question.optionOne.votes.includes(user.id)}
          ></QuestionOption>
          <QuestionOption
            handleClick={handleClick}
            option="Two"
            text={question.optionTwo.text}
            selected={checkSeletctedOption("optionTwo")}
            votes={question.optionTwo.votes.length}
            totalVotes={
              question.optionTwo.votes.length + question.optionOne.votes.length
            }
            disableButton={question.optionTwo.votes.includes(user.id)}
          ></QuestionOption>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { id } = props.params;

  return {
    question: questions[id],
    user: users[authedUser],
  };
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
