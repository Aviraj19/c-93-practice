var firebaseConfig = {
    apiKey: "AIzaSyDd1lg0ceaYZEserTfvHD-qqTFnuuvKv9E",
    authDomain: "kwitter-d6642.firebaseapp.com",
    databaseURL: "https://kwitter-d6642-default-rtdb.firebaseio.com",
    projectId: "kwitter-d6642",
    storageBucket: "kwitter-d6642.appspot.com",
    messagingSenderId: "1015919603538",
    appId: "1:1015919603538:web:28b4d468b89c835af5148b",
    measurementId: "G-D5Q6SZPVK3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser() {
   username=document.getElementById("username").value ;
   firebase.database().ref("/").child(username).update({purpose:"adding user"}) ;
  }