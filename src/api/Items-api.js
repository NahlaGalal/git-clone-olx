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

export const setItem = (
  Category,
  Name,
  Price,
  Quantity,
  Image,
  ImageName,
  Description,
  uid
) =>
  firebase
    .firestore()
    .collection("Items")
    .add({
      Category,
      Image,
      Name,
      Price,
      Quantity,
      ImageName,
      Description,
      uid
    });

export const getItem = id =>
  firebase
    .firestore()
    .collection("Items")
    .doc(id)
    .get();

export const deleteItem = id =>
  firebase
    .firestore()
    .collection("Items")
    .doc(id)
    .delete();
