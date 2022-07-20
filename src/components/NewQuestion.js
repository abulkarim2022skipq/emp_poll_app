import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPageLocation } from "../actions/nav";
import { handleAddQuestion } from "../actions/shared";
import Header from "./Header";

const NewQuestion = (props) => {
  const { dispatch, user } = props;

  const navigate = useNavigate();

  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  useEffect(() => {
    dispatch(setPageLocation("new"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="new-question" style={{ marginBottom: "100px" }}>
        <div className="center">
          <h3>Would You Rather</h3>
          <div className="create-poll-text">Create your own poll</div>
          <div className="avatar">
            <img src={user.avatarURL} alt="avatar" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="new-question-options">
            <label>First option:</label>
            <br />
            <input
              type="text"
              placeholder="Option One"
              onChange={(e) => {
                setOptionOneText(e.target.value);
              }}
            />
          </div>
          <div className="new-question-options">
            <label>Second option:</label>
            <br />
            <input
              type="text"
              placeholder="Option Two"
              onChange={(e) => {
                setOptionTwoText(e.target.value);
              }}
            />
          </div>
          <div className="submit-button">
            <div>
              <button
                className="question-show-button"
                type="submit"
                disabled={
                  optionOneText.length < 1 || optionTwoText.length < 1
                    ? true
                    : false
                }
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, authedUser }) => {
  return {
    user: users[authedUser],
  };
};

export default connect(mapStateToProps)(NewQuestion);
