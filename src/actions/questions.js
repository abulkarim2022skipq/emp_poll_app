import { _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_OPTION = "ADD_ANSWER_OPTION";
export const REMOVE_ANSWER_OPTION = "REMOVE_ANSWER_OPTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addAnswerOption(questionid, option, authedUser) {
  return {
    type: ADD_ANSWER_OPTION,
    option,
    id: questionid,
    authedUser,
  };
}

function removeAnswerOption(questionid, authedUser) {
  return {
    type: REMOVE_ANSWER_OPTION,
    id: questionid,
    authedUser,
  };
}

export function handleAnswerSelected(question, option) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const ans = { authedUser, qid: question.id, answer: option };
    _saveQuestionAnswer(ans)
      .then(() => {
        console.log("Updated");
        dispatch(removeAnswerOption(question.id, authedUser));
        dispatch(addAnswerOption(question.id, option, authedUser));
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };
}
