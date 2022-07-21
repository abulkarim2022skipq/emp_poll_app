import { Navigate, useLocation } from "react-router-dom";

export default ({ children, authedUser }) => {
  const location = useLocation();

  return authedUser === "" ? (
    <Navigate
      to="/login"
      replace
      state={{ path: location.pathname }}
    ></Navigate>
  ) : (
    children
  );
};
