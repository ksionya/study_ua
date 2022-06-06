function initCarousel() {
  $('.team-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9425 16.0576L5.2185 10.3336H17.9998V7.66695H5.2185L10.9425 1.94295L9.05717 0.0576172L0.114502 9.00028L9.05717 17.943L10.9425 16.0576Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.0575 1.94238L12.7815 7.66638L0.000163134 7.66638L0.000163367 10.3331L12.7815 10.333L7.0575 16.0571L8.94283 17.9424L17.8855 8.99972L8.94283 0.0570477L7.0575 1.94238Z" fill="white"/></svg></button>',

  });
  $('.reviews-carousel').slick({
    centerMode: true,
    centerPadding: '220px',
    slidesToShow: 1,
    dots: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: '100px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
  });
  $('.advantages-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9449 16.0563L5.22094 10.3323H18.0023V7.66561H5.22094L10.9449 1.94161L9.05961 0.0562744L0.116943 8.99894L9.05961 17.9416L10.9449 16.0563Z" fill="#252525"/></svg></button>',
nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.05994 1.94177L12.7839 7.66577L0.00261026 7.66577L0.0026105 10.3324L12.7839 10.3324L7.05994 16.0564L8.94527 17.9418L17.8879 8.9991L8.94527 0.0564354L7.05994 1.94177Z" fill="#252525"/></svg></button>',
  });
  if ($(window).width() >= 1025) {
    $('.benefits-list.slick-slider').slick('unslick');
  }
if ($(window).width() <=1024) {
  $('.benefits-list').not('.slick-slider').slick({
    arrows: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: false,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9425 16.0576L5.2185 10.3336H17.9998V7.66695H5.2185L10.9425 1.94295L9.05717 0.0576172L0.114502 9.00028L9.05717 17.943L10.9425 16.0576Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.0575 1.94238L12.7815 7.66638L0.000163134 7.66638L0.000163367 10.3331L12.7815 10.333L7.0575 16.0571L8.94283 17.9424L17.8855 8.99972L8.94283 0.0570477L7.0575 1.94238Z" fill="white"/></svg></button>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

}
  if ($(window).width() >= 768) {
    $('.facts-list.slick-slider').slick('unslick');
  }
  if ($(window).width() <=767) {
    $('.facts-list').not('.slick-slider').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      prevArrow: '<button type="button" class="slick-arrow slick-prev"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.9425 16.0576L5.2185 10.3336H17.9998V7.66695H5.2185L10.9425 1.94295L9.05717 0.0576172L0.114502 9.00028L9.05717 17.943L10.9425 16.0576Z" fill="white"/></svg></button>',
      nextArrow: '<button type="button" class="slick-arrow slick-next"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.0575 1.94238L12.7815 7.66638L0.000163134 7.66638L0.000163367 10.3331L12.7815 10.333L7.0575 16.0571L8.94283 17.9424L17.8855 8.99972L8.94283 0.0570477L7.0575 1.94238Z" fill="white"/></svg></button>',
    });

  }
}

document.querySelector('.language').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.language ul').classList.toggle('show')

  document.querySelector('body').addEventListener('click', function(event) {
    //if (event.target. )
  })
})

$(document).ready(function () {
  initCarousel();
})

document.querySelector('.burger').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.header-menu').classList.toggle('show');
})

// function initCarousel() {
//
//
//
//
//
// }
//
//
// document.addEventListener("DOMContentLoaded", function(event) {
//   initCarousel();
// });


$(document).ready(function () {
  initCarousel();
});
$(window).resize(function () {
  initCarousel();
});
