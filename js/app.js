$(".next-step-2").on("click", function () {
  console.log('next-step-2');
  $('.step-1').removeClass("active");
  $('.step-1').addClass("disabled");
  $('.content-step-1').addClass('hidden');
  $('.content-step-2').removeClass('hidden');
});

$('.next-step-3').on("click", function () {
  console.log('next-step-3');
  $('.step-2').removeClass("active");
  $('.step-2').addClass("disabled");
  $('.content-step-2').addClass('hidden');
  $('.content-step-4').removeClass('hidden');
});


$('.slider').glide({
  autoplay: false,
  arrowsWrapperClass: 'slider-arrows',
  arrowRightText: '',
  arrowLeftText: ''
});
