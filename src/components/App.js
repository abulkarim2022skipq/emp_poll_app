import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { handleInitialData } from "../actions/shared";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import { LoadingBar } from "react-redux-loading-bar";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";

function App(props) {
  const { dispatch, loading } = props;

  useEffect(() => {
    // console.log("calling useEffect", props);.
    dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Header />
        {loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/question/:id" element={<QuestionPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/new" element={<NewQuestion />} />
          </Routes>
        )}
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null,
  };
};

export default connect(mapStateToProps)(App);
