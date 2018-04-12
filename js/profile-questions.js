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
        rules:[
          {
            type:'empty',
            prompt:'Ingrese disponibilidad'
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
  });