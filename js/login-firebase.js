// Initialize Firebase
var config = {
    apiKey: "AIzaSyAiIe2suwj2sqSAftDoKEb9OWvTLGJErMM",
    authDomain: "red-social-cc078.firebaseapp.com",
    databaseURL: "https://red-social-cc078.firebaseio.com",
    projectId: "red-social-cc078",
    storageBucket: "red-social-cc078.appspot.com",
    messagingSenderId: "357327737326"
  };
  firebase.initializeApp(config);
  
  
  // autenticación con google :
  
  var user = null;
  var usersConnected = null;
  var dataUser = null;
  var buttonApply = $('.apply-button-js');
  // conectando con la base de datos :
  var database = firebase.database();
  // llave unica por usuario conexion : 
  var connectionKey = '';
  
  
  buttonApply.on('click', function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    // doc firebase :
    firebase
    .auth()
    .signInWithPopup(provider)
    
    .then(function(result) {
      // guardando el resultado que trae result:
       user = result.user;
      //mostrando el contenido:
      console.log(user);
      // ...
      // si el usuario se logea puede entrar al app :
    initApp();
    $(location).attr('href', '/views/profile-questions.html');
    }).then(
     
      );
   // $(location).attr('href', 'views/home.html');
  
  })
  
  function initApp() {
    
    // referencia a una tabla en la base de datos :
    usersConnected = database.ref('/connected');
    dataUser = database.ref('dataUser')
    registerUsers(user.uid, user.displayName, user.email,user.photoURL)
    // 2 parámetros , el 2do si no tiene displayName toma el email:
    login(user.uid , user.displayName || user.email);
   /*  function login (uid , name) {
      //se crea un objeto en la base de datos y se guarda la referencia :
      var connected = usersConnected.push({
        uid: uid ,
        name: name,
        
      });
      connectionKey = connectionKey;
  
    } */
  
  }
  
  function registerUsers(uid , name , email , photoURL){
    dataUser.child(user.uid).set({
    name: name,
    email: email,
    photoURL:photoURL
  
   })
  }
  
  function login (uid , name) {
    //se crea un objeto en la base de datos y se guarda la referencia :
    var connected = usersConnected.update({
      uid: uid ,
      name: name,
      
    });
    connectionKey = connectionKey;
  
  }
  
  //SIGN OUT : 
  
  $('.sign-out-js').click(function () {
    firebase.auth().signOut().then(function () {
      $(location).attr('href', 'project-GMD/views/video.html');
    }).catch(function (error) {
      // An error happened.
  
    });
  }); 
  
  
  