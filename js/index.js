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

// login
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

// logout
$("#btn-logout").click(function(){
firebase.auth().signOut();
});

// signup
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

// forget password
$("#btn-resetPassword").click(function(){
var auth = firebase.auth();
var email = $("#email").val();

if(email!= ""){
  auth.sendPasswordResetEmail(email).then(function(){
  window.alert("Email successfully sent! Please check and verify!");
  }).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
      
    console.log(errorCode);
    console.log(errorMessage);
    window.alert("Message: " + errorMessage);
  });
}
else{
  window.alert("Please write your email first");
}
});

// Account Settings
$("#btn-update").click(function(){
var phone = $("#phone").val();
var address = $("#address").val();
var bio = $("#bio").val();
var name = $("#name").val();
var nickname = $("#nickname").val();
var country = $("#country").val();
var gender = $("#gender").val();

var rootRef = firebase.database().ref().child("Users");
var userID = firebase.auth().currentUser.uid;
var usersRef = rootRef.child(userID);

if(name!="" && nickname!="" && phone!="" && address!="" && bio!="" && country!="" && gender!=""){
  var userData = {
    "phone" : phone, 
    "address" : address,
    "bio" : bio,
    "name" : name,
    "nickname" : nickname,
    "country" : country,
    "gender" : gender,
  }

  usersRef.set(userData, function(error){
    if(error){
      var errorCode = error.code;
      var errorMessage = error.message;
      
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message: " + errorMessage);
    }
    else{
      window.location.href = "main.html";
    }
  });
}
else{
  window.alert("Form is incomplete");
}
});

function switchView(view){
  $.get({
    url:view,
    cache:false,
  })
  .then(function(data){
    $("#container").html(data);
  })
}