import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getInitialData } from "../utils/api";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import {
  addAnswerOption,
  addQuestion,
  receiveQuestions,
  removeAnswerOption,
} from "./questions";
import { addAnswer, receiveUsers, addQuestionInUser } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
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
        dispatch(removeAnswerOption(question.id, authedUser));
        dispatch(addAnswerOption(question.id, option, authedUser));
        dispatch(addAnswer(question.id, option, authedUser));
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };
}

export function handleAddQuestion(optionOne, OptionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    _saveQuestion({
      optionOneText: optionOne,
      optionTwoText: OptionTwo,
      author: authedUser,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionInUser(question.id, authedUser));
    });
  };
}
