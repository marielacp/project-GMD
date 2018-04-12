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
}

const widget = uploadcare.Widget('[role=uploadcare-uploader]');
widget.onUploadComplete(function (info) {
  var pregunta = chosenQuestions[centinel].question;
  const urlVideo = info.cdnUrl;
  console.log(urlVideo);
  $('.recommendations').addClass('hidden');
  $('.video-ready').removeClass('hidden');
});

var _pTiempo = 1;

var valorInicial, time, interv;

$(document).ready(function () {
  startTimer();
});

iniTimer()
function iniTimer() {
  valorInicial = _pTiempo * 20000;
  time = new Date(valorInicial);
  displayTime();
}

function finTimer() {
  $('.tiempo').html('tiempo terminado');
}

function startTimer() {
  time = new Date(valorInicial);
  interv = setInterval(function () {
    time = new Date(time - 1000);
    displayTime();
    if (time <= 0) {
      clearInterval(interv);
      finTimer();
    }
  }, 1000);
  displayTime();
}

function stopTimer() {
  clearInterval(interv);
  time = new Date(valorInicial);
  displayTime();
}

function displayTime() {
  var text_tiempo =
    fillZeroes(time.getMinutes()) +
    ":" +
    fillZeroes(time.getSeconds());

  $('#timer').html(text_tiempo);
}

function fillZeroes(t) {
  t = t + "";
  if (t.length == 1)
    return "0" + t;
  else
    return t;
}

var mins = 00,
  segs,
  s,
  m;

$(document).on('click', '.uploadcare--widget__button_type_open', function (event) {
  stopTimer();
  $('.uploadcare--tab__title').prepend(`<p>${centinel + 1}. ${chosenQuestions[centinel].question}</p>`)
  return $('.uploadcare--tab__content').append(`<div>Tiempo restante: <span id="minutos">00:</span><span id ="segundos">00</span></div>`);
});

// Para "Record a video"
$(document).on('click', '.uploadcare--camera__button_type_start-record', function (e) {
  e.preventDefault();
  $('#segundos').empty();
  var time = chosenQuestions[centinel].time;
  $('#segundos').text(time);
  segs = time - 1;
  m = setInterval('segundos()', 1000);

});

function segundos() {
  $('#segundos').html(segs);
  if (segs == 0) {
    var dm = clearInterval(m);
    s = setInterval('minutos()', 1000);
  }
  segs--;

  if (segs == 5) {
    console.log('Se acabo su tiempo');
  }

}

function minutos() {
  $('#minutos').html(mins);
  if (mins == 0) {
    location.reload();
    var ds = clearInterval(s);
  }
  mins--;
}