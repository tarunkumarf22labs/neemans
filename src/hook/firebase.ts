//@ts-nocheck
const firebaseConfig = {
  apiKey: "AIzaSyDDEN0_pR1eB7OO0X5Vqf7mLXhWvgcssSU",
  authDomain: "f22stories.firebaseapp.com",
  projectId: "f22stories",
  storageBucket: "f22stories.appspot.com",
  messagingSenderId: "624176465099",
  appId: "1:624176465099:web:904082c5adacf5c543474e",
  measurementId: "G-GMF2DSK271",
};

export const loadFirebase = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js";
    script.async = true;

    script.onload = () => {
      const scriptFirestore = document.createElement("script");
      scriptFirestore.src =
        "https://www.gstatic.com/firebasejs/8.6.1/firebase-firestore.js";

      scriptFirestore.onload = () => {
          window.firebase.initializeApp(firebaseConfig);
          window.firebase.firestore(); // Initialize Firestore
          resolve(window.firebase);
      };

      document.body.appendChild(scriptFirestore);
    };

    script.onerror = (error) => {
      reject(error);
    };

    document.body.appendChild(script);
  });
};




