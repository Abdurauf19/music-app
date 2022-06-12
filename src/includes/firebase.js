import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCb4UgEHMHLa74sPHiO28Q5d1hzsIAtgF8",
  authDomain: "musics-9f950.firebaseapp.com",
  projectId: "musics-9f950",
  storageBucket: "musics-9f950.appspot.com",
  appId: "1:804117221868:web:0eec2e0ba3ff51656b30c9"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);