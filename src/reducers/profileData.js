const profileData = (
  state = { Name: "", Items: [], City: "", User: "", Mail: "", Phone: "" },
  action
) => {
  switch (action.type) {
    case "GET_PROFILE_DATA":
      return { ...action };
    default:
      return state;
  }
};

export default profileData;
