import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import AuthedComponent from "./AuthedComponent";
import Login from "./Login";

function App(props) {
  const { dispatch, authedUser } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <div className="container">
        <div>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <AuthedComponent authedUser={authedUser}>
                  <Dashboard />
                </AuthedComponent>
              }
            />

            <Route
              path="/question/:id"
              exact
              element={
                <AuthedComponent authedUser={authedUser}>
                  <QuestionPage />
                </AuthedComponent>
              }
            />

            <Route
              path="/leaderboard"
              element={
                <AuthedComponent authedUser={authedUser}>
                  <Leaderboard />
                </AuthedComponent>
              }
            />

            <Route
              path="/add"
              element={
                <AuthedComponent authedUser={authedUser}>
                  <NewQuestion />
                </AuthedComponent>
              }
            />

            <Route
              path="/notfound"
              element={
                <AuthedComponent authedUser={authedUser}>
                  <NotFound />
                </AuthedComponent>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(App);
