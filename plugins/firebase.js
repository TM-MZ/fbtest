import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAIgdJ3hmSJ_jawno2zjye3kN-OSTbtRw",
  authDomain: "fbtest-36f16.firebaseapp.com",
  projectId: "fbtest-36f16",
  storageBucket: "fbtest-36f16.appspot.com",
  messagingSenderId: "1093608556995",
  appId: "1:1093608556995:web:663253e2a5d97ecbdf5576",
  measurementId: "G-FF1J25TEYL",
};

const firebaseApp = initializeApp(firebaseConfig);
export default (context, inject) => {
  inject("firebase", firebaseApp);
};
