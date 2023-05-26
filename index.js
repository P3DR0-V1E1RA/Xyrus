$(document).ready(function(){
    $('.carousel-container').slick({
      autoplay: true, // Ativar reprodução automática
      autoplaySpeed: 3000, // Definir intervalo de tempo entre os slides (em milissegundos)
      arrows: true, // Exibir botões de navegação (setas)
      dots: false, // Remover os pontos indicadores de slide
      infinite: true, // Permitir rolagem infinita
      speed: 500, // Velocidade da transição entre slides (em milissegundos)
      slidesToShow: 1, // Número de slides visíveis ao mesmo tempo
      slidesToScroll: 1 // Número de slides para rolar de cada vez
    });
  });
  