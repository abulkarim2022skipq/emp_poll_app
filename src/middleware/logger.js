const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("State before action:", store.getState());
  console.log("Action Payload:", action);
  next(action);
  console.log("State after action:", store.getState());
  console.groupEnd();
};

export default logger;
