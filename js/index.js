 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyDwoUy2r4q3_cVSf53Qrxa48kP8npdv6QQ",
  authDomain: "fir-webapp-6614e.firebaseapp.com",
  databaseURL: "https://fir-webapp-6614e.firebaseio.com",
  projectId: "fir-webapp-6614e",
  // storageBucket: "fir-webapp-6614e.appspot.com",
  storageBucket: "",
  messagingSenderId: "502109128587",
  appId: "1:502109128587:web:ae53e5e67a19cf6e3d918e"
  // measurementId: "G-C2PTSPMV0Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// firebase auth persistance
firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function(){
  var email = $("#email").val();
  var password = $("#password").val();

  if(email!="" && password!=""){
    var result = firebase.auth().signInWithEmailAndPassword(email, password);

    result.catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message: " + errorMessage);
    });
  }
  else{
    window.alert("Please fill out all fields!");
  }
});