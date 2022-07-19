export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_OPTION = "ADD_ANSWER_OPTION";
export const REMOVE_ANSWER_OPTION = "REMOVE_ANSWER_OPTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addAnswerOption(questionid, option, authedUser) {
  return {
    type: ADD_ANSWER_OPTION,
    option,
    id: questionid,
    authedUser,
  };
}

export function removeAnswerOption(questionid, authedUser) {
  return {
    type: REMOVE_ANSWER_OPTION,
    id: questionid,
    authedUser,
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
