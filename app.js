//as variaveis que estao com $ na frente é pq trazem objetos

//selecionando todos os itens do site que tem o atributo data-group
$("[data-group]").each(function () {
  //seleciona todos os atributos [data-target] que estão dentro (.find) do [data-group]
  var $allTarget = $(this).find("[data-target]"),
    $allClick = $(this).find("[data-click]"),
    activeClass = "active";

  //adiciona no primeiro elemento a class active
  $allTarget.first().addClass(activeClass);
  $allClick.first().addClass(activeClass);

  //cria function de click
  $allClick.click(function (e) {
    e.preventDefault();

    //pega o valor que está dentro do data-click
    var id = $(this).data("click"),
      //pega o data-target que tiver
      $target = $('[data-target="' + id + '"]');

    $allClick.removeClass(activeClass);
    $allTarget.removeClass(activeClass);

    $target.addClass(activeClass);
    $(this).addClass(activeClass);
  });
});
