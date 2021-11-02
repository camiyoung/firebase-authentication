import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'A',
  authDomain: 'auth-test-web.firebaseapp.com',
  projectId: 'auth-test-web',
  storageBucket: 'auth-test-web.appspot.com',
  messagingSenderId: '427275653170',
  appId: '1:',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

//Email 로그인
export const signupEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

//Email 회원가입
export const loginEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//Google 로그인
const provider = new GoogleAuthProvider();
export const loginGoogle = () => {
  return signInWithPopup(auth, provider);
};
