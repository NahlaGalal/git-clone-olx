import {
  addDataToFirebase,
  addEmailAndPassword,
  getUser,
  getToken,
  getPassword
} from "../api/User-api";
import { getItems, getLocation } from "../api/Items-api";

export const addField = (field, text) => {
  const fieldType = `ADD_${field.toUpperCase()}`;
  return {
    type: "ADD_FIELD",
    fieldType,
    text
  };
};

export const signupValidation = state => {
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
        .then(() => {
          getToken(data.user);
          localStorage.setItem("uid", data.user.uid);
          return dispatch({
            type: "ADD_USER_SUCCESSED",
            uid: data.user.uid
          });
        })
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

export const getItemsByFilter = filter => dispatch => {
  dispatch({
    type: "IS_LOADING"
  });

  getItems().then(doc => {
    const Items = [];
    doc.docs
      .filter(Items => Items.data().Category === filter || filter === "all")
      .map(item => {
        getLocation(item.data().userId).then(user => {
          const obj = {
            ...item.data(),
            itemId: item.id,
            userCity: user.data().City
          };
          Items.push(obj);
          if (Items.length === 1) {
            dispatch({
              type: "GET_ITEMS_STARTED",
              Item: obj
            });
          } else if (Items.length <= 5)
            dispatch({
              type: "GET_ITEMS_CONTINUED",
              Item: obj
            });
        });
        return item;
      });
  });
};

export const login = userData => dispatch => {
  dispatch({
    type: "IS_LOADING"
  });
  getUser(userData.Mail, userData.Password)
    .then(data => {
      getToken(data.user);
      localStorage.setItem("uid", data.user.uid);
      dispatch({
        type: "LOGIN_SUCCESSED",
        uid: data.user.uid
      });
    })
    .catch(err => {
      dispatch({ type: "LOGIN_FAILED" });
    });
};

export const forgetPassword = mail => dispatch =>
  getPassword(mail)
    .then(() => dispatch({ type: "FORGET_PASSWORD", validity: "Reset password" }))
    .catch(() => dispatch({ type: "FORGET_PASSWORD", validity: "Invalid mail" }));
