
$(function () {
  $('#formulario').form({
    salario: {
      identifier: 'salario',
      rules: [
        {
          type: 'empty',
          prompt: 'Ingrese tu salario deseado'
        },
        {
          type: 'number',
          prompt: 'Ingrese número'
        }
      ]
<<<<<<< HEAD
    },
    disponibilidad: {
      identifier: 'disponibilidad',
      rules: [
        {
          type: 'empty',
          prompt: 'Ingrese disponibilidad'
        }
      ]
    },
    grado: {
      identifier: 'grado',
      rules: [
        {
          type: 'empty',
          prompt: 'Ingrese disponibilidad'
        }
      ]

    },
    maxLength: {
      identifier: 'maxLength',
      rules: [
        {
          type: 'empty',
          prompt: 'Ingrese descripción'
        },
        {
          type: 'maxLength[100]',
          prompt: 'Máximo 100 caracteres'
        }
      ]
    },
    cv:{
      identifier:'cv',
      rules:[
        {
          type:'empty',
          prompt:'Adjunte su CV'
        }
      ]
    }
  }, {
      onSuccess: function (e) {
        e.preventDefault();
        // alert('Gracias por postular GMD')
      }
    })

  // $("#archivo").click(function () {
  //   $(this).parent().find("input:file").click();
  //   console.log('si');
  // });

  // $('#archivo').on('change', function (e) {
  //   console.log('si');
  //     var name = e.target.files[0].name;
  //     console.log(name);
  //     $("#name-archivo").val(name);
  //   });
  $("input:text").click(function() {
    $(this).parent().find("input:file").click();
  });
  
  $('input:file', '.ui.action.input')
    .on('change', function(e) {
      var name = e.target.files[0].name;
      $('input:text', $(e.target).parent()).val(name);
    });
});
=======
      
      },
      maxLength: {
        identifier: 'maxLength',
        rules: [
          {
            type: 'empty',
            prompt: 'Ingrese descripción'
          },
          {
            type: 'maxLength[100]',
            prompt: 'Máximo 100 caracteres'
          }
        ]
      }
    }, {
        onSuccess: function (e) {
          e.preventDefault();
          // alert('Gracias por postular GMD')
          $(location).attr('href', '/views/profile.html');
        }
      })
  });

$(function() {
     
    // Get a reference to the database service
    var database = firebase.database();
   // dataUser = database.ref('/dataUser' + uid)
    var $autores = [];
    var user = firebase.auth().currentUser;
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
       // dataUser = database.ref('dataUser/' + user.uid)
          // User is signed in.
          
         // agregaElemento($autores,(user.uid));
          console.log('logueado'); 
          //window.location.href="../autores/";
console.log(user);
          
  
        /*   $('.autoresFavoritos').on('click',function() {
            if(!$(this).hasClass('active')){
              $(this).addClass('active');
              $autores.push($(this).val());
              console.log($autores);
              if ($autores.length>=5) {
                $('#next').attr("disabled", false);
              }
            }
          }); */
          $("input:text").click(function() {
            $(this).parent().find("input:file").click();
          });
          
          $('input:file', '.ui.action.input')
            .on('change', function(e) {
              
              //  var name = e.target.files[0].name;
               // var file = e.target.files[0];
              //  console.log(file);
                $('input:text', $(e.target).parent()).val(name);
              //  $autores.push(file);
                dataUser = database.ref('dataUser/' + user.uid)
               var StorageRef = firebase.storage().ref();
                var imageUpload = e.target.files[0];
                var uploadImages = StorageRef.child('userCV/' +user.uid).put(imageUpload);
                // User is signed in.
                
               // agregaElemento($autores,(user.uid));
              
              
            });
         // });
          
        } else {
          // No user is signed in.
          console.log('no logueado');
        }
      });
   
  
    /* function agregaElemento(pruebaElemento){
        //dataUser = database.ref()
        var StorageRef = firebase.storage().ref();
        StorageRef.push({
         pruebaElemento: pruebaElemento,        
        })
       } */  
}); 

/* $(".upload-cv").click(function() {
  $(this).parent().find("input:file").click();
});

$('input:file', '.ui.action.input')
  .on('change', function(e) {
    var name = e.target.files[0].name;
    $('input:text', $(e.target).parent()).val(name);
  }); */
>>>>>>> 39df1db3bdfe98280a56fa63862ace2cd50b513e
