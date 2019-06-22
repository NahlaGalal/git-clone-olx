const profileData = (
  state = { Name: "", Items: [], City: "", User: "", Mail: "", Phone: "" },
  action
) => {
  switch (action.type) {
    case "GET_PROFILE_DATA":
      return { ...action };
    case "GET_USER_NAME":
      return { ...state, Name: action.Name };
    default:
      return state;
  }
};

export default profileData;
