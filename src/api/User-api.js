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

export const getUser = (Mail, Password) =>
  auth.signInWithEmailAndPassword(Mail, Password);

export const getToken = user =>
  user.getIdToken(true).then(token => localStorage.setItem("token", token));

export const getPassword = mail =>
  auth.sendPasswordResetEmail(mail);