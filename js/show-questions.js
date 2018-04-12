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
    console.log(question.question);
    $(".questions .list").append(`
      <li> ${question.question}</li>`
    );
  });

}

ShowQuestion(chosenQuestions);