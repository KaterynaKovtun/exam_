// // Подключение slick-slider
$(document).ready(function(){
	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
  		slidesToScroll: 3,
  		responsive: [
  			{
  				breakpoint: 1024,
  				settings: {
					  slidesToShow: 2,
					  slidesToScroll: 2,
  				}
  			},
  			{
  				breakpoint: 576,
  				settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1,
  					arrows: false
  				}
  			},
  		]
	});
});

// $('.multiple-items').slick({
// 	infinite: true,
// 	slidesToShow: 3,
// 	slidesToScroll: 3
//   });