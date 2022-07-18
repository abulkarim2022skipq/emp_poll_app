import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import QuestionOption from "./QuestionOption";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    const params = useParams();

    return <Component {...props} params={params}></Component>;
  };

  return ComponentWithRouterProp;
};

const QuestionPage = (props) => {
  console.log(props);
  const { question } = props;
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
        <QuestionOption text={question.optionOne.text}></QuestionOption>
        <QuestionOption text={question.optionTwo.text}></QuestionOption>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }, props) => {
  const { id } = props.params;
  console.log("From map", questions);
  console.log("From map", authedUser);

  return {
    question: questions[id],
  };
};

export default withRouter(connect(mapStateToProps)(QuestionPage));
