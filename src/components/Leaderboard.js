import { useEffect } from "react";
import { connect } from "react-redux";
import { setPageLocation } from "../actions/nav";
import Header from "./Header";

const Leaderboard = (props) => {
  const { dispatch, users } = props;

  useEffect(() => {
    dispatch(setPageLocation("leaderboard"));
  }, []);

  if (users === undefined || users.length < 1) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <Header />

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
                        <img
                          src={user.avatarURL}
                          alt="avatar"
                          width="50px"
                          height="50px"
                        />
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
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  var usersToReturn = Object.keys(users).map((user) => {
    const { answers, name, questions, id, avatarURL } = users[user];
    return { answers, name, questions, id, avatarURL };
  });

  usersToReturn = usersToReturn.sort((a, b) => {
    const sumA = a.questions.length + Object.keys(a.answers).length;
    const sumB = b.questions.length + Object.keys(b.answers).length;
    return sumB - sumA;
  });

  return { users: usersToReturn };
};

export default connect(mapStateToProps)(Leaderboard);
