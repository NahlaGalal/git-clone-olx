const itemData = (state, action) => {
  state = {
    item: {
      Category: "",
      Description: "",
      Image: "",
      ImageName: "",
      Name: "",
      Price: "",
      Quantity: "",
      uid: ""
    },
    user: {
      City: "",
      Name: "",
      Mail: "",
      Phone: "",
      User: ""
    }
  }

  switch (action.type) {
    case "GET_ITEM_SUCCESSED":
      return {
        item: action.item,
        user: action.user
      };
    case "GET_ITEM_FAILED":
      return action.error;
    default:
      return state;
  }
}

export default itemData;