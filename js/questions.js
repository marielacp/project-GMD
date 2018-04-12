const questions = {
  // Programdor
  'softSkills': [
    {
      'question': '¿Cual fue el nivel de logros alcanzados en estos dos últimos años?',
      'Time': 45
    },
    {
      'question': '¿Cómo respondes al sentido de urgencias de las demandas de los clientes?',
      'Time': 30
    },
    {
      'question': '¿Qué has logrado implementar o mejorar en tu última experiencia laboral?',
      'Time': 60
    },
    {
      'question': '¿Cuál consideras que es el impacto que tienen tus funciones en relación al negocio en general?',
      'Time': 60
    },
    {
      'question': '¿Por qué te sientes orgulloso de ti mismo?',
      'Time': 30
    }
  ],

  'technicalSkills': [
    {
      'question': '¿Qué framework conoces en Java (.Net) y cuánto tiempo lo has empleado?',
      'Time': 60
    },
    {
      'question': '¿Describe cómo has utilizado los framework en Java (.Net) en el Proyecto?',
      'Time': 45
    },
    {
      'question': '¿Qué framework en Javascript conoces, cuanto tiempo y como lo has empleado?',
      'Time': 60
    },
    {
      'question': '¿Has manejado PSQL, cuanto tiempo y como lo has empleado?',
      'Time': 60
    },
    {
      'question': '¿Cuéntanos la experiencia del trabajo en equipo has tenido?',
      'Time': 20
    }
  ]
}

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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var name = user.displayName;
    console.log(name)
    var photo = user.photoURL;
    $('.name-js').text(name);
    $('.photo-user-js').attr('src',photo)
  }
})
