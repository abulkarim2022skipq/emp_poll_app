import { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import Login from "./Login";

function App(props) {
  const { dispatch, loading } = props;

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(handleInitialData());
    if (loading === false) {
      navigate("/login");
    }
  }, []);

  return (
    <Fragment>
      <div className="container">
        {loading === true ? null : (
          <div>
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/question/:id" element={<QuestionPage />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/add" element={<NewQuestion />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
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
