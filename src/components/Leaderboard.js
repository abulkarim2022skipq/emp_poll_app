import { useEffect } from "react";
import { connect } from "react-redux";
import { setPageLocation } from "../actions/nav";

const Leaderboard = (props) => {
  const { dispatch, users } = props;

  useEffect(() => {
    dispatch(setPageLocation("leaderboard"));
  }, []);

  if (users === undefined || users.length < 1) {
    return <div>No data found</div>;
  }

  return (
    <div className="leaderboard">
      <table className="leaderboard-table">
        <thead>
          <tr>
            <td>User</td>
            <td>Answered</td>
            <td>Created</td>
          </tr>
        </thead>
        <tbody>
          {users.length < 1 === true ? (
            <div>Not</div>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="leaderboard-user">
                    <div className="avatar-small">
                      <img src={user.avatar} alt="avatar small" />
                    </div>
                    <div className="leaderboard-user-details">
                      <div className="leaderboard-username">{user.name}</div>
                      <div className="leaderboard-userid">{user.id}</div>
                    </div>
                  </div>
                </td>
                <td>{Object.keys(user.answers).length}</td>
                <td>{user.questions.length}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  var usersToReturn = Object.keys(users).map((user) => {
    const { answers, name, questions, id, avatar } = users[user];
    return { answers, name, questions, id, avatar };
  });

  return { users: usersToReturn };
};

export default connect(mapStateToProps)(Leaderboard);
