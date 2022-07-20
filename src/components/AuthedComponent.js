import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default ({ children, isAuthed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isAuthed === "") {
      console.log(isAuthed);
      navigate("/login", { replace: true, state: { path: location.pathname } });
    }
  }, []);

  return children;
};
