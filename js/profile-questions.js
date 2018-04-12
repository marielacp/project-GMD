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
            type:'number',
            prompt:'Ingrese número'
          }
        ]
      },
      disponibilidad:{
        identifier:'disponibilidad',
        rules:[
          {
            type:'empty',
            prompt:'Ingrese disponibilidad'
          }
        ]
      },
      grado:{
        identifier:'grado',
        prompt:'Ingrese academico'
      }
    }, {
        onSuccess: function (e) {
          e.preventDefault();
          // alert('Gracias por postular GMD')
        }
      })
  });