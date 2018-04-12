$(".next-step-2").on("click", function () {
  console.log('next-step-2');
  $('.step-1').removeClass("active");
  $('.step-1').addClass("disabled");
  $('.content-step-1').addClass('hidden');
  $('.content-step-2').removeClass('hidden');
});

$(document).on('click', '.next-step-3', function (event) {
  console.log('next-step-3');
  $('.step-2').removeClass("active");
  $('.step-2').addClass("disabled");
  $('.content-step-2').addClass('hidden');
  $('.content-step-3').removeClass('hidden');
});

const numQuestionsRequired = [2, 2]; // Preguntas requeridas por grupo
let arrAllQuestions = []; // todas las preguntas seleccionadas por grupo
let chosenQuestions = []; // Todas las preguntas por alumno

// desordena todas las preguntas
const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

//Selecciona las preguntas del usuario
const questionsSelectedUser = (questionsSelectedGroup) => {
  questionsSelectedGroup.forEach((question) => {
    chosenQuestions.push({ question: question.question, time: question.Time });
  });
}

// Itera sobre las preguntas
Object.keys(questions).forEach((key, index) => {
  const group = questions[key];
  let orderRandomQuestions = shuffle(group);
  let questionsSelectedGroup = orderRandomQuestions.slice(0, numQuestionsRequired[index]); // número de preguntas requeridas
  questionsSelectedUser(questionsSelectedGroup)
});

function ShowQuestion(chosenQuestions) {
  chosenQuestions.forEach((question) => {
    /* $(".questions .list").append(`
      <li> ${question.question}</li>`
    ); */
  });

}

ShowQuestion(chosenQuestions);