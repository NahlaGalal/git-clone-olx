import firebase from "../firebase";

export const getItems = () =>
  firebase
    .firestore()
    .collection("Items")
    .get();

export const getLocation = uid =>
  firebase
    .firestore()
    .collection("Users")
    .doc(uid)
    .get();

export const getUserItems = uid =>
  firebase
    .firestore()
    .collection("Items")
    .where("userId", "==", uid)
    .get();
