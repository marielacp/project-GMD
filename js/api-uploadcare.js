UPLOADCARE_LOCALE = 'es';
UPLOADCARE_TABS = "camera";
UPLOADCARE_PUBLIC_KEY = 'ffb2ae19e02a22b3388d';
// secret key = 5a3047c7ed7af54f60a4
UPLOADCARE_LOCALE_TRANSLATIONS = {
  buttons: {
    choose: {
      files: {
        one: 'Grabar respuesta',
        other: 'Grabar'
      }
    }
  }
}


// Mostrar preguntas

const $question = $('.question-js');
let centinel = 0;

function nextQuestion() {
  centinel += 1;
  console.log($question.text(`Pregunta ${centinel + 1}`));
  if (centinel === 7) {
    nextQuestion
      .addEventListener('click', function () {
        title.textContent = 'Pregunta ' + (centinel);
        window.location.href = 'finish.html';
      })
    localStorage.setItem('estado', 'true');
  } else {
    localStorage.setItem('estado', 'false');
  }
}


$(document).on('click', '.uploadcare--widget__button.uploadcare--widget__button_type_open', function (event) {
  $('.uploadcare--tab__title').prepend(`<p>${centinel + 1}. ${chosenQuestions[centinel].question}</p></br>`)
});
