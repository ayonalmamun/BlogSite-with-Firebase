// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyARiaf3od1Eh2b-iPL01-vnu6XVcCjvfLY",
    authDomain: "form-fc020.firebaseapp.com",
    databaseURL: "https://form-fc020.firebaseio.com",
    projectId: "form-fc020",
    storageBucket: "form-fc020.appspot.com",
    messagingSenderId: "1017705351701",
    appId: "1:1017705351701:web:dd7258f75afcb12817dc1c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

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

$("#btn-logout").click(function(){
  firebase.auth().signOut();
});

$("#btn-signup").click(function(){
  var email = $("#email").val();
  var password = $("#password").val();
  var cPassword = $("#confirmPassword").val();

  if(password == cPassword){
    if(email!="" && password!="" && cPassword!=""){
      var result = firebase.auth().createUserWithEmailAndPassword(email, password);
  
      result.catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        
        console.log(errorCode);
        console.log(errorMessage);
        window.alert("Message: " + errorMessage);
      });
    }
    else{
      window.alert("Form is Incomplete");
    }
  }
  else{
    window.alert("Password doesn't match with confirm password!");
  }
});