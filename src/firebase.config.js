import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAnsKtJ8KF2muXeqC5CrDTRECRaxnnTciY',
  authDomain: 'netflix-clone-d5b65.firebaseapp.com',
  projectId: 'netflix-clone-d5b65',
  storageBucket: 'netflix-clone-d5b65.appspot.com',
  messagingSenderId: '1042637457201',
  appId: '1:1042637457201:web:1a46299954a86ed7e41210',
  measurementId: 'G-JZGLP8TGXJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
