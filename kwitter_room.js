const firebaseConfig = {
      apiKey: "AIzaSyDUK-hyQV0qkouMy8N-BwuTA5v-a_FAW24",
      authDomain: "kwitter-8f234.firebaseapp.com",
      projectId: "kwitter-8f234",
      storageBucket: "kwitter-8f234.appspot.com",
      messagingSenderId: "911483134074",
      appId: "1:911483134074:web:ea9f9012dc33bb7c629bc3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
