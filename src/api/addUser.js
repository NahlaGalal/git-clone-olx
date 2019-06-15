import firebase, { auth } from "../firebase";

export const addEmailAndPassword = state =>
  auth.createUserWithEmailAndPassword(state.Mail, state.Password);

export const addDataToFirebase = (state, uid) => {
  const { Name, User, Mail, Phone, City } = state;
  return firebase
    .firestore()
    .collection("Users")
    .doc(uid)
    .set({
      Name,
      User,
      Mail,
      Phone,
      City
    });
};
