const items = (state = [], action) => {
  switch (action.type) {
    case "GET_ITEMS_STARTED":
      return [action.Item];
    case "GET_ITEMS_CONTINUED":
      return [...state, action.Item];
    default:
      return state;
  }
};

export default items;
