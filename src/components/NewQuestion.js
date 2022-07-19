import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setPageLocation } from "../actions/nav";
import { handleAddQuestion } from "../actions/shared";

const NewQuestion = (props) => {
  // TODO: Disable button on no text

  const { dispatch } = props;

  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  useEffect(() => {
    dispatch(setPageLocation("new"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(optionOneText, optionTwoText));
  };

  return (
    <div className="new-question">
      <div className="center">
        <h3>Would You Rather</h3>
        <div className="create-poll-text">Create your own poll</div>
      </div>
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect()(NewQuestion);
