import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'firebase/firestore';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAIAPT-2RyzUbLk4AkNLYjfjGnoKpMNLPE",
  authDomain: "cart-b4676.firebaseapp.com",
  projectId: "cart-b4676",
  storageBucket: "cart-b4676.appspot.com",
  messagingSenderId: "643682072214",
  appId: "1:643682072214:web:09fd6c2e1122c41f5134b7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
