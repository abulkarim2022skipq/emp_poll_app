import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { nav, user } = props;

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
                <Link to="/new" className={nav === "new" ? "active-nav" : ""}>
                  New Question
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul>
              <li>
                <Link to={"/"}>{"user.id"}</Link>
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
