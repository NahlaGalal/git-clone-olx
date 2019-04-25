import * as firebase from 'firebase';

// const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBePhRX72W-kZuswwYncn84A040uscokpo",
  authDomain: "git-clone-olx.firebaseapp.com",
  databaseURL: "https://git-clone-olx.firebaseio.com",
  projectId: "git-clone-olx",
  storageBucket: "git-clone-olx.appspot.com",
  messagingSenderId: "156096810962"
};

firebase.initializeApp(config);
// firebase.firestore().settings(settings);

export default firebase;