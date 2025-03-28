
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  // Replace these with your actual Firebase config values
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
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
