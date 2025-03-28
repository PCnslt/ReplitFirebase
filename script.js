
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl5vZXe5X5ykfl2wOJ2t6DlytEQSJqR9Q",
  authDomain: "replitfirebase-e797b.firebaseapp.com",
  projectId: "replitfirebase-e797b",
  storageBucket: "replitfirebase-e797b.firebasestorage.app",
  messagingSenderId: "172677088081",
  appId: "1:172677088081:web:93fd9b9a9157a7f7494970"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Form submission handler
document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    timestamp: new Date()
  };

  try {
    const docRef = await addDoc(collection(db, "messages"), formData);
    console.log("Document written with ID: ", docRef.id);
    alert("Message sent successfully!");
    e.target.reset(); // Clear the form
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error sending message. Please try again.");
  }
});
