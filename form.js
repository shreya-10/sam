


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA5UawPeEvOTHPCAWL51XAkqrbhqDfYVs4",
    authDomain: "form-737f1.firebaseapp.com",
    databaseURL: "https://form-737f1.firebaseio.com",
    projectId: "form-737f1",
    storageBucket: "form-737f1.appspot.com",  
  
    messagingSenderId: "90190447748",
    appId: "1:90190447748:web:23305c2e7f79c6174ceed1",
    measurementId: "G-GHF674DKCV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();
  function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");

  }
  
  function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    console.log("sign in confirmed")
    promise.catch(e => alert(e.message));
    
    
    
    
  }
  
  
  function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    
  }
  
  
  
  auth.onAuthStateChanged(function(user){
    
    if(user){
      
      var email = user.email;
      alert("Active User " + email);
      
      //Take user to a different or home page

      //is signed in
      
    }else{
      
      alert("No Active User");
      //no user is signed in
    }
    
    
    
  });

  function googleform(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);


  }
