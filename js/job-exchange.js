// AGREGANDO FUNCIONALIDAD AL INPUT :
$(document).ready(function() {
    var $searchInput= $('.input-js');
   // console.log($searchInput.val())
    $($searchInput).on('keyup', function() {
        var name = $(this).val().toLowerCase();
      //  console.log('name',name)
         $('.cards-js').hide();
        $('.cards-js').each(function() {
          if ($(this).attr('id').toLowerCase().indexOf(name) !== -1) {
                $(this).show();
          }
          }) 
        })

var $container = $(".container-js");
console.log($container);
console.log(DATA);

for (var i = 0; i < DATA.length; i++) {
  var ref = DATA[i];
  var template = `<div class="column cards-js" id="${ref.cargo}">
  <div class="ui cards">
      <div class="card">
          <div class="content">
            <h3 class="ui center aligned header">${ref.cargo} </h3>
          </div>
          <div class="extra content">
              <div class="description">Fecha: ${ref.fecha} </div>
              <div class="description">Ubicción: ${ref.ubicacion} </div>
              <div class="description">Rubro: ${ref.rubro} </div>
            <div class="">
              <br>
                <button class="ui primary button fluid">
                <a href='../views/video.html'>
                Más información 
                </a>
                </button>
            </div>
          </div>
        </div>
  </div>
  </div>`;
  $container.append(template);
}
})
