const data = DATA[0];

data.funciones.forEach(function(element) {
  console.log(element);
  $(".responsibilities").append(`

<li><i class="fas fa-circle"></i>  ${element}</li>`);
});

$(".title-job").html(data.cargo);
$(".description").html(data.objetivo);
