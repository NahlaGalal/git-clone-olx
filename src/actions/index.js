import { addDataToFirebase, addEmailAndPassword } from "../api/addUser";

export const addField = (field, text) => {
  const fieldType = `ADD_${field.toUpperCase()}`;
  return {
    type: "ADD_FIELD",
    fieldType,
    text
  };
};

export const checkValidity = state => {
  let validity = false;
  const filteration = Object.keys(state).filter(key => state[key]);
  if (filteration.length === 7) validity = true;
  let error = "Missing";
  if (validity) {
    if (state.RePassword !== state.Password) {
      error = "Pass";
      validity = false;
    } else error = "";
  }
  return {
    type: "VALID_SIGNUP",
    validity,
    error
  };
};

export const addUser = state => dispatch => {
  dispatch({
    type: "IS_LOADING"
  });

  addEmailAndPassword(state)
    .then(data =>
      addDataToFirebase(state, data.user.uid)
        .then(() =>
          dispatch({
            type: "ADD_USER_SUCCESSED"
          })
        )
        .catch(() =>
          dispatch({
            type: "ADD_USER_FAILED"
          })
        )
    )
    .catch(() =>
      dispatch({
        type: "ADD_USER_FAILED"
      })
    );
};
