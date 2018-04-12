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