$(function () {
    $('#formulario').form({
      nombre: {
        identifier: 'nombre',
        rules: [
          {
            type: 'empty',
            prompt: 'Ingrese nombre'
          }
        ]
      },
      apellido: {
        identifier: 'apellido',
        rules: [
          {
            type: 'empty',
            prompt: 'Ingrese apellido'
          }
        ]
      },
      email: {
        identifier: 'email',
        rules: [
          {
            type: 'email',
            prompt: 'Ingrese correo valido'
          }
        ]
      },
      mes: {
        identifier: 'mes',
        rules: [
          {
            type: 'empty',
            prompt: 'Selecciona una mes'
          }
        ]
      },
      password: {
        identifier: 'password',
        rules: [
          {
            type: 'minLength[6]',
            prompt: 'Por favor escriba una contraseña de almenos 6 caracteres'
          }
        ]
      },
      password2: {
        identifier: 'password2',
        rules: [
          {
            type: 'match[password]',
            prompt: 'Las contraseñas no coinciden'
          }
        ]
      },
      documento: {
        identifier: 'documento',
        rules: [
          {
            type: 'empty',
            prompt: 'Ingrese documento'
          },
          {
            type: 'number',
            prompt: 'Ingrese número de documento'
          },
          {
            type: 'minLength[7]',
            prompt: 'Ingrese minimo 7 número en documento'
          }
  
        ]
      },
      celular: {
        identifier: 'celular',
        rules: [
          {
            type: 'empty',
            prompt: 'Ingrese tu número de celular'
          },
          {
            type: 'number',
            prompt: 'Ingrese numero en celular'
          },
          {
            type: 'minLength[9]',
            prompt: 'Ingrese minimo 9 numero en celular'
          }
  
        ]
      },
      dia: {
        identifier: 'dia',
        rules: [
          {
            type: 'empty',
            prompt: 'Ingrese el día'
          },
          {
            type: 'number',
            prompt: 'Ingrese números en día'
          },
          {
            type: 'maxLength[2]',
            prompt: 'Maximo 2 números en día'
          }
        ]
      },
      ao: {
        identifier: 'ao',
        rules: [
          {
            type: 'empty',
            prompt: 'Ingrese año de nacimiento'
          },
          {
            type: 'number',
            prompt: 'Ingrese números en año'
          }
        ]
      },
      carrera: {
        identifier: 'carrera',
        rules: [
          {
            type: 'empty',
            prompt: 'Ingrese carrera'
          }
        ]
      },
      universidad: {
        identifier: 'universidad',
        rules: [
          {
            type: 'empty',
            prompt: 'Ingrese universidad'
          }
        ]
      },
      ingles: {
        identifier: 'ingles',
        rules: [
          {
            type: 'empty',
            prompt: 'Seleccione una opción en inglés'
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
      tipoDocumento :{
        identifier:'tipoDocumento',
        rules:[
          {
            type:'empty',
            prompt:'Seleccione opción'
          }
        ]
      },
      direccion:{
        identifier:'direccion',
        rules:[
          {
            type:'empty',
            prompt:'Ingrese dirección'
          }
        ]
      },
      idiomas:{
        identifier:'idiomas',
        rules:[
          {
            type:'empty',
            prompt:'Ingrese idioma'
          }
        ]
      },
      fecha:{
        identifier:'fecha',
        rules:[
          {
            type:'empty',
            prompt:'Ingrese fecha de nacimiento'
          }
          // {
          //   type:'regExp[^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$]',
          //   prompt:'Ingrese fecha correcta'
          // }
        ]
      }
    }, {
        onSuccess: function (e) {
          e.preventDefault();
          alert('Gracias por postular GMD');
          $(location).attr('href', '/views/step-user.html');
        }
      })
  });