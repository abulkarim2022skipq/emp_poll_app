import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default ({ children, authedUser }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (authedUser === "") {
      navigate("/login", { replace: true, state: { path: location.pathname } });
    }
  }, []);

  return children;
};
