import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { handleInitialData } from "../actions/shared";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import { LoadingBar } from "react-redux-loading-bar";

function App(props) {
  console.log("props", props);

  useEffect(() => {
    console.log("calling useEffect", props);
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />
      <div className="container">
        <Header />
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/question/:id" element={<QuestionPage />} />
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
