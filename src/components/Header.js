import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = (props) => {
  const { nav, user } = props;

  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    navigate("/login");
  };

  return (
    <header>
      <nav className="nav">
        <div className="nav-div">
          <div className="nav-left">
            <ul>
              <li>
                <Link to="/" className={nav === "home" ? "active-nav" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/leaderboard"
                  className={nav === "leaderboard" ? "active-nav" : ""}
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/add" className={nav === "new" ? "active-nav" : ""}>
                  New Question
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul>
              <li className="avatar-smaller">
                <Link to={"/"}>
                  {user !== undefined ? (
                    <img src={user.avatarURL} width={"50px"} />
                  ) : (
                    ""
                  )}
                </Link>
              </li>
              <li>
                <Link to={"/"}>{user !== undefined ? user.id : ""}</Link>
              </li>
              <li>
                <a onClick={handleLogout} to={"/login"}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = ({ nav, users, authedUser }) => {
  return { nav, user: users[authedUser] };
};

export default connect(mapStateToProps)(Header);
