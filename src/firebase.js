import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBePhRX72W-kZuswwYncn84A040uscokpo",
  authDomain: "git-clone-olx.firebaseapp.com",
  databaseURL: "https://git-clone-olx.firebaseio.com",
  projectId: "git-clone-olx",
  storageBucket: "git-clone-olx.appspot.com",
  messagingSenderId: "156096810962"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.EmailAuthProvider();
export const auth = firebase.auth();

export default firebase;
