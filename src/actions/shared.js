import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getInitialData } from "../utils/api";
import { _saveQuestionAnswer } from "../utils/_DATA";
import { setAuthedUser } from "./authedUser";
import {
  addAnswerOption,
  receiveQuestions,
  removeAnswerOption,
} from "./questions";
import { addAnswer, receiveUsers } from "./users";

const AUTHED_USER = "sarahedo";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(setAuthedUser(AUTHED_USER));
      dispatch(hideLoading());
    });
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
        dispatch(addAnswer(question.id, option, authedUser));
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };
}
