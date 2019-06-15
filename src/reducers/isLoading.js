const isLoading = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return true;
    default:
      return false
  }
}

export default isLoading;