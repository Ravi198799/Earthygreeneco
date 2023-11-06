$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1 // Show 2 slides in smaller screens
        }
      },
      {
        breakpoint: 850, // Change the medium screen breakpoint as needed
        settings: {
          slidesToShow: 2 // Show 4 slides in medium screens
        }
      },
      {
        breakpoint: 1000, // Change the medium screen breakpoint as needed
        settings: {
          slidesToShow: 4 // Show 4 slides in medium screens
        }
      }
    ]
  });
});
$(document).ready(function(){
  $('.brands').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1 // Show 2 slides in smaller screens
        }
      },
      {
        breakpoint: 850, // Change the medium screen breakpoint as needed
        settings: {
          slidesToShow: 2 // Show 4 slides in medium screens
        }
      },
      {
        breakpoint: 1000, // Change the medium screen breakpoint as needed
        settings: {
          slidesToShow: 4 // Show 4 slides in medium screens
        }
      }
    ]
  });
});

// Change the language

document.getElementById('english').addEventListener('click', function() {
  // changeLanguage('en');
});

document.getElementById('sinhala').addEventListener('click', function() {
  // changeLanguage('si');
});

// Change the language



document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  // const preloader = document.querySelector('#preloader');
  // if (preloader) {
  //   window.addEventListener('load', () => {
  //     preloader.remove();
  //   });
  // }

  /**
   * Mobile nav toggle
   */

  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */

  function updateHeroText(slideIndex) {
    const titles = [
      "Earthy Green <span>Pioneering Sustainability for a Greener Tomorrow!</span>",
      "New Title for Slide 2",
      "New Title for Slide 3",
      // Add more titles for each slide
    ];
  
    const descriptions = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "New Description for Slide 2",
      "New Description for Slide 3",
      // Add more descriptions for each slide
    ];
  
    const heroTitle = document.getElementById('hero-title');
    const heroDescription = document.getElementById('hero-description');
  
    heroTitle.innerHTML = titles[slideIndex];
    heroDescription.innerHTML = descriptions[slideIndex];
  }
  


  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }

  });

  /**
   * Init swiper slider with 2 slides at once in desktop view
   */
  new Swiper('.slides-2', {
    speed: 600,
    loop: false,
    autoplay: {
      delay: 500000,
      disableOnInteraction: true
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        speed: 600,
    loop: true,
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
        
      }
    }
  });


  /**
   * Porfolio isotope and filter
   */
  // let portfolionIsotope = document.querySelector('.portfolio-isotope');

  // if (portfolionIsotope) {

  //   let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolionIsotope.getAttribute('data-portfolio-filter') : '*';
  //   let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolionIsotope.getAttribute('data-portfolio-layout') : 'masonry';
  //   let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolionIsotope.getAttribute('data-portfolio-sort') : 'original-order';

  //   window.addEventListener('load', () => {
  //     let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
  //       itemSelector: '.portfolio-item',
  //       layoutMode: portfolioLayout,
  //       filter: portfolioFilter,
  //       sortBy: portfolioSort
  //     });

  //     let menuFilters = document.querySelectorAll('.portfolio-isotope .portfolio-flters li');
  //     menuFilters.forEach(function(el) {
  //       el.addEventListener('click', function() {
  //         document.querySelector('.portfolio-isotope .portfolio-flters .filter-active').classList.remove('filter-active');
  //         this.classList.add('filter-active');
  //         portfolioIsotope.arrange({
  //           filter: this.getAttribute('data-filter')
  //         });
  //         if (typeof aos_init === 'function') {
  //           aos_init();
  //         }
  //       }, false);
  //     });

  //   });

  // }

  
    // Get references to the text elements
    const heading = document.querySelector("#hero-heading");
    const description = document.querySelector("#hero-description");

    // Get references to the carousel and its items
    const carousel = document.querySelector("#hero-carousel");
    const carouselItems = carousel.querySelectorAll(".carousel-item");

    // Listen for the carousel slide event
    carousel.addEventListener("slide.bs.carousel", function (event) {
      // Get the index of the active carousel item
      const activeItemIndex = Array.from(carouselItems).indexOf(event.relatedTarget);

      // Update the text content based on the active carousel item
  
    });
  

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.hero-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  // /**
  //  * Init swiper slider with 2 slides at once in desktop view
  //  */
  // new Swiper('.slides-2', {
  //   speed: 600,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   slidesPerView: 'auto',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 20
  //     },

  //     1200: {
  //       slidesPerView: 2,
  //       spaceBetween: 20
  //     }
  //   }
  // });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});