import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const Login = (props) => {
  const { users, dispatch } = props;

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPasswordAlert, setWrongPasswordAlert] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (users[username] !== undefined) {
        if (users[username].password === password) {
          dispatch(setAuthedUser(username));
          navigate("/");
        }
      }
      setWrongPassword(true);
    } catch (error) {
      setWrongPassword(true);
      console.log(error);
    }
  };

  useEffect(() => {
    if (wrongPassword) {
      setWrongPasswordAlert(true);
      setUsername("");
      setPassword("");
      const timeout = setTimeout(() => {
        setWrongPasswordAlert(false);
        setWrongPassword(false);
      }, 3000);
      return () => {
        clearInterval(timeout);
      };
    }
  }, [wrongPassword]);

  return (
    <div className="login">
      <div className="center">
        <h3>Login</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="login-options">
          <label>Username:</label>
          <input
            data-testid="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="login-options">
          <label>Password:</label>
          <input
            data-testid="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="login-submit-button">
          <div>
            <button
              className="question-show-button"
              type="submit"
              disabled={
                username.length < 1 || password.length < 1 ? true : false
              }
            >
              Login
            </button>
          </div>
        </div>
      </form>
      {wrongPasswordAlert && (
        <div className="wrong-password-alert-div">
          <div className="wrong-password-alert">
            Username or Password is incorrect
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};
export default connect(mapStateToProps)(Login);
