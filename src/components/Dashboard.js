import { connect } from "react-redux";
import QuestionContainer from "./QuestionContainer";

const Dashboard = ({ newQuestions, doneQuestions }) => {
  return (
    <div>
      <QuestionContainer title="New Questions" questions={newQuestions} />
      <QuestionContainer title="Done" questions={doneQuestions} />
    </div>
  );
};
const mapStateToProps = ({ authedUser, users, questions }) => {
  const newQuestions = Object.keys(questions).filter(
    (que) =>
      que !== Object.keys(users[authedUser].answers).find((e) => e === que)
  );

  const doneQuestions = Object.keys(questions).filter(
    (que) =>
      que === Object.keys(users[authedUser].answers).find((e) => e === que)
  );

  return {
    newQuestions,
    doneQuestions,
  };
};
export default connect(mapStateToProps)(Dashboard);
