import {
  _saveQuestion,
  _saveQuestionAnswer,
  _getQuestions,
  _getUsers,
} from "./utils/_DATA";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import { fireEvent, render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import store from "./redux/store";
import App from "./components/App";
import Login from "./components/Login";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";

describe("testing async function SaveQuestion", () => {
  it("will return an object if correct values are passed", async () => {
    let question = {
      optionOneText: "learn French",
      optionTwoText: "learn Italian",
      author: "sarahedo",
    };
    let result = await _saveQuestion(question);
    expect(result.optionOne.text).toEqual(question.optionOneText);
    expect(result.optionTwo.text).toEqual(question.optionTwoText);
    expect(result.author).toEqual(question.author);
  });

  it("will reject the promise and throw error if incorrect values are passed", async () => {
    let question = {
      optionOneText: "learn a new language",
      optionTwoText: "learn a new framework",
    };
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("testing async function SaveQuestionAnswer", () => {
  it("will resolve with true if correct values are passed", async () => {
    let authedUser = "sarahedo";
    let questionid = "6ni6ok3ym7mf1p33lnez";
    let answer = "optionOne";
    let result = await _saveQuestionAnswer({
      authedUser: authedUser,
      qid: questionid,
      answer: answer,
    });
    expect(result).toEqual(true);
  });

  it("will reject the promise and throw error if incorrect values are passed", async () => {
    let authedUser = "sarahedo";

    await expect(
      _saveQuestionAnswer({
        authedUser: authedUser,
      })
    ).rejects.toEqual("Please provide authedUser, qid, and answer");
  });
});

describe("testing users and questions from backend(_DATA.js)", () => {
  it("will return all users from database", async () => {
    await expect(_getUsers()).not.toBeNull();
  });

  it("will return all questions from database", async () => {
    await expect(_getQuestions()).not.toBeNull();
  });
});

describe("testing snapshot of different components", () => {
  it("App component", () => {
    let component = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });

  it("Leaderboard Component", () => {
    let component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Leaderboard />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });

  it("Header ", () => {
    let component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});

describe("testing DOM", () => {
  it("Login", () => {
    let component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Login />
          <Dashboard />
        </Provider>
      </MemoryRouter>
    );
    let userid = component.getByTestId("username");
    fireEvent.change(userid, { target: { value: "tylermcginnis" } });
    let password = component.getByTestId("password");
    fireEvent.change(password, { target: { value: "abc321" } });
    let submitButton = component.getByRole("button");
    fireEvent.click(submitButton);
    let dashboard = component.getByTestId("dashboard");
    expect(dashboard).toBeInTheDocument();
  });
});
