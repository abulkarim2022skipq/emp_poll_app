import { useEffect } from "react";
import { connect } from "react-redux";
import { setPageLocation } from "../actions/nav";

const NewQuestion = (props) => {
  const { dispatch } = props;

  useEffect(() => {
    dispatch(setPageLocation("new"));
  }, []);
  return <div>NewQuestion</div>;
};

export default connect()(NewQuestion);
