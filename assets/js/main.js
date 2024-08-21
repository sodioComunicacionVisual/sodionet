/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Metize - Startup & SaaS Template
    Version         : 1.0
    
* ================================================================= */
(function($) {
	"use strict";

	$(document).ready(function() {


		/* ==================================================
		    # Tooltip Init
		===============================================*/
		$('[data-toggle="tooltip"]').tooltip();


		/* ==================================================
		    # Youtube Video Init
		 ===============================================*/
		$('.player').mb_YTPlayer();


		/* ==================================================
		    # Scrolla active
		===============================================*/
		$('.animate').scrolla({
			mobile: false,
		});


		/* ==================================================
		    # imagesLoaded active
		===============================================*/
		$('#gallery-masonary,.blog-masonry').imagesLoaded(function() {

			/* Filter menu */
			$('.mix-item-menu').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});

			/* filter menu active class  */
			$('.mix-item-menu button').on('click', function(event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});

			/* Filter active */
			var $grid = $('#gallery-masonary').isotope({
				itemSelector: '.gallery-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.gallery-item',
				}
			});

			/* Filter active */
			$('.blog-masonry').isotope({
				itemSelector: '.blog-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.blog-item',
				}
			});

		});


		/* ==================================================
		    # Fun Factor Init
		===============================================*/
		$('.timer').countTo();
		$('.fun-fact').appear(function() {
			$('.timer').countTo();
		}, {
			accY: -100
		});


		/* ==================================================
		    # Magnific popup init
		 ===============================================*/
		$(".popup-link").magnificPopup({
			type: 'image',
			// other options
		});

		$(".popup-gallery").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			// other options
		});

		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		$('.magnific-mix-gallery').each(function() {
			var $container = $(this);
			var $imageLinks = $container.find('.item');

			var items = [];
			$imageLinks.each(function() {
				var $item = $(this);
				var type = 'image';
				if ($item.hasClass('magnific-iframe')) {
					type = 'iframe';
				}
				var magItem = {
					src: $item.attr('href'),
					type: type
				};
				magItem.title = $item.data('title');
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: 'mfp-fade',
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data('prev-text'),
					tNext: $(this).data('next-text')
				},
				type: 'image',
				callbacks: {
					beforeOpen: function() {
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					}
				}
			});
		});


		/* ==================================================
		    _Progressbar Init
		 ===============================================*/
		function animateElements() {
			$('.progressbar').each(function() {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						// startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 130,
						thickness: 13,
						lineCap: 'round',
						emptyFill: '#f1f1f1',
						fill: {
							gradient: ['#2667FF', '#00bfff']
						}
					}).on('circle-animation-progress', function(event, progress, stepValue) {
						$(this).find('strong').text((stepValue * 100).toFixed(0) + "%");
					}).stop();
				}
			});

		}

		animateElements();
		$(window).scroll(animateElements);


		/* ==================================================
            # Services Carousel
         ===============================================*/
		const overviewCarousel = new Swiper(".overview-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoplay: {
				delay: 15000,
				disableOnInteraction: false,
			},

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
		});


		/* ==================================================
            # Testimonial Carousel
         ===============================================*/
		const testimonialStage = new Swiper(".testimonial-stage-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			autoplay: true,
			slidesPerView: 1,
			centeredSlides: true,
			spaceBetween: 30,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				991: {
					slidesPerView: 2,
					spaceBetween: 30,
					centeredSlides: false,
				},
				1200: {
					slidesPerView: 3.5,
					spaceBetween: 40,
				},
				1800: {
					slidesPerView: 3.9,
					spaceBetween: 60,
				},
			},
		});


		/* ==================================================
		    # Brand Carousel
		 ===============================================*/
		const brandCarousel = new Swiper(".brand-carousel", {
			// Optional parameters
			loop: true,
			autoplay: {
				delay: 1,
				disableOnInteraction: false
			},
			slidesPerView: 2,
			speed: 5000,
			grabCursor: true,
			mousewheelControl: true,
			keyboardControl: true,
			breakpoints: {
				450: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				}
			},
		});


		/* ==================================================
            # Services Carousel
         ===============================================*/
		const servicesCarousel = new Swiper(".services-carousel", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			// If we need pagination
			pagination: {
				el: '.services-pagination',
				type: 'fraction',
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".services-button-next",
				prevEl: ".services-button-prev"
			},
			breakpoints: {
				992: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1400: {
					slidesPerView: 2.6,
					spaceBetween: 50,
				},
			},
		});


		/* ==================================================
            # Testimonial Carousel
         ===============================================*/
		const testimonialTwo = new Swiper(".testimonial-style-two-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
            el: '.swiper-scrollbar',
          },*/
		});


		/* ==================================================
		    Contact Form Validations
		================================================== */
		$('.contact-form').each(function() {
			var formInstance = $(this);
			formInstance.submit(function() {

				var action = $(this).attr('action');

				$("#message").slideUp(750, function() {
					$('#message').hide();

					$('#submit')
						.after('<img src="assets/img/ajax-loader.gif" class="loader" />')
						.attr('disabled', 'disabled');

					$.post(action, {
							name: $('#name').val(),
							email: $('#email').val(),
							phone: $('#phone').val(),
							comments: $('#comments').val()
						},
						function(data) {
							document.getElementById('message').innerHTML = data;
							$('#message').slideDown('slow');
							$('.contact-form img.loader').fadeOut('slow', function() {
								$(this).remove()
							});
							$('#submit').removeAttr('disabled');
						}
					);
				});
				return false;
			});
		});


		/* ==================================================
		    Services Hover JS
		================================================== */
		const link = document.querySelectorAll('.service-hover-item');
		const linkHoverReveal = document.querySelectorAll('.service-hover-wrapper');
		const linkImages = document.querySelectorAll('.service-hover-placeholder');
		for (let i = 0; i < link.length; i++) {
			link[i].addEventListener('mousemove', (e) => {
				linkHoverReveal[i].style.opacity = 1;
				linkHoverReveal[i].style.transform = `translate(-100%, -50% ) rotate(-3deg)`;
				linkImages[i].style.transform = 'scale(1, 1)';
				linkHoverReveal[i].style.left = e.clientX + "px";
			})
			link[i].addEventListener('mouseleave', (e) => {
				linkHoverReveal[i].style.opacity = 0;
				linkHoverReveal[i].style.transform = `translate(-50%, -50%) rotate(5deg)`;
				linkImages[i].style.transform = 'scale(0.8, 0.8)';
			})
		}


		/* ==================================================
		    GSAP animation
		================================================== */

		gsap.set(".animation-shape", {
			yPercent: 10
		});

		gsap.to(".animation-shape", {
			yPercent: -200,
			ease: "none",
			scrollTrigger: {
				trigger: ".animation-shape",
				scrub: 1
			},
		});


		// Start Text Animation
		const animEls = document.querySelectorAll('.animation-text');
		animEls.forEach(el => {
			var splitEl = new SplitText(el, {
				type: "lines, words",
				linesClass: "line"
			});
			var splitTl = gsap.timeline({
				duration: .35,
				ease: 'power4',
				scrollTrigger: {
					trigger: el,
					start: 'top 90%'
				}
			});

			splitTl.from(splitEl.words, {
				yPercent: "100",
				stagger: 0.025,
			});

		});

		let animGSAP = new SplitText('.anim-gsap', {
			type: 'lines,words',
			linesClass: 'lineclass'
		});
		gsap.from(animGSAP.words, {
			duration: 0.4,
			opacity: 0,
			y: 50,
			rotation: 45,
			stagger: 0.10
		});
		// End Text Animation

	}); // end document ready function



	/* ==================================================
        Preloader Init
     ===============================================*/
	function loader() {
		$(window).on('load', function() {
			$('#metize-preloader').addClass('loaded');
			$("#loading").fadeOut(500);
			// Una vez haya terminado el preloader aparezca el scroll

			if ($('#metize-preloader').hasClass('loaded')) {
				// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
				$('#preloader').delay(900).queue(function() {
					$(this).remove();
				});
			}
		});
	}
	loader();


})(jQuery); // End jQuery

  	/*------------------------------------------
	= Ukiyo
	-------------------------------------------*/
    document.addEventListener('DOMContentLoaded', function() {
        const parallaxElements = document.querySelectorAll('.ukiyo');
        const ukiyoInstance = new Ukiyo(parallaxElements);
    });


	
	/*------------------------------------------
	= brand slider
	-------------------------------------------*/
	var slider = new Swiper('.brand-slider', {
		slidesPerView: 6,
		roundLengths: true,
		loop: true,
		loopAdditionalSlides: 30,
		autoplay: {
			enabled: true,
			delay: 0, // Sin retardo entre deslizamientos
			disableOnInteraction: false, // Mantiene el deslizamiento continuo incluso después de la interacción
		},
		speed: 5000, // Velocidad constante del movimiento
		breakpoints: {
			'1600': {
				slidesPerView: 6,
			},
			'1200': {
				slidesPerView: 6,
			},
			'992': {
				slidesPerView: 5,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			},
		},
	});
	

	// CaseStudies Autoplay video
	function playVideo(container) {
		const video = container.querySelector('video');
		video.play(); // Reproducir el video desde donde se quedó
	}
	
	function pauseVideo(container) {
		const video = container.querySelector('video');
		video.pause(); // Pausar el video en el punto actual
	}


		/*------------------------------------------
	= split text
	-------------------------------------------*/
	$(document).ready(function() {
		splitText();
	});
	
	function splitText() {
		var st = $(".xb-split-text");
        if(st.length == 0) return;
        gsap.registerPlugin(SplitText);
        st.each(function(index, el) {
            el.split = new SplitText(el, { 
                type: "lines,words,chars",
                linesClass: "split-line"
            });
            gsap.set(el, { perspective: 100 });

            if( $(el).hasClass('split-in-fade') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    ease: "Back.easeOut",
                });
            }
            if( $(el).hasClass('split-in-right') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "70",
                    ease: "Back.easeOut",
                });
            }
            if( $(el).hasClass('split-in-left') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "-50",
                    ease: "circ.out",
                });
            }
            if( $(el).hasClass('split-in-up') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "80",
                    ease: "circ.out",
                });
            }
            if( $(el).hasClass('split-in-down') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "-80",
                    ease: "circ.out",
                });
            }
            if( $(el).hasClass('split-in-rotate') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    rotateX: "50deg",
                    ease: "circ.out",
                });
            }
            if( $(el).hasClass('split-in-scale') ){
                gsap.set(el.split.chars, {
                    opacity: 0,
                    scale: "0.5",
                    ease: "circ.out",
                });
            }
            el.anim = gsap.to(el.split.chars, {
                scrollTrigger: {
                    trigger: el,
                    // toggleActions: "restart pause resume reverse",
                    start: "top 100%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                scale: 1,
                opacity: 1,
                duration: 0.4, 
                stagger: 0.06,
            });
        });
	}

	/*------------------------------------------
	= trigger
	-------------------------------------------*/
	gsap.registerPlugin(ScrollTrigger);
	$('.xb_trigger').each(function () {
		gsap.to(this, {
			scrollTrigger: {
				trigger: this,
			},
			onComplete: function() {
				this.targets().forEach(function(target) {
					target.classList.add('triggered');
				});
			}
		});
	});



	//Gsap StrokeText
	var mySplitText = new SplitText("#citation");

	function animation() {
	TweenMax.staggerFrom(mySplitText.chars, 0.5, {opacity: 0, y:-20, ease: Back.easeInOut}, 0.07);
	}
	
	animation()




	
//FirstScrollText (Red)
gsap.registerPlugin(ScrollTrigger);

const textElements = gsap.utils.toArray('.scrolltext, .scrolltext2');

textElements.forEach(text => {
  gsap.to(text, {
    backgroundSize: '100%',
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: text,
      start: 'center 80%',
      end: 'center 30%', 
      scrub: 1.5,       
    },
  });
});



// GSAP AboutUs Gallery
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("portfolio")) {
    const horizontalSections = gsap.utils.toArray('.horiz-gallery-wrapper');

    horizontalSections.forEach(function (sec) {
      const pinWrap = sec.querySelector(".horiz-gallery-strip");

      let pinWrapWidth;
      let horizontalScrollLength;

      function refresh() {
        pinWrapWidth = pinWrap.scrollWidth;
        horizontalScrollLength = pinWrapWidth - window.innerWidth;
      }

      refresh();
      
      gsap.to(pinWrap, {
        scrollTrigger: {
          scrub: true,
          trigger: sec,
          pin: sec,
          start: "center center",
          end: () => `+=${pinWrapWidth}`,
          invalidateOnRefresh: true
        },
        x: () => -horizontalScrollLength,
        ease: "none"
      });

      ScrollTrigger.addEventListener("refreshInit", refresh);
    });
  }

  // Cursor Customization in Portfolio Section
  document.querySelector('.portfolio-section').addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.cursor_cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  document.querySelector('.portfolio-section').addEventListener('mouseleave', function () {
    document.querySelector('.cursor_cursor').style.display = 'none';
  });
  
  document.querySelector('.portfolio-section').addEventListener('mouseenter', function () {
    document.querySelector('.cursor_cursor').style.display = 'grid';
  });

  // Image Hover Effect in Slider
  const slides = document.querySelectorAll(".slide-projects");
  const image = document.querySelector(".slider__image-projects");

  if (slides.length > 0 && image) {
    slides.forEach(slide => {
      slide.addEventListener("mouseenter", (e) => {
        const imgSrc = slide.querySelector("img").getAttribute("data-src");
        if (imgSrc) {
          image.src = imgSrc;
          gsap.to(image, {
            opacity: 1,
            visibility: 'visible',
            duration: 0.3,
            x: e.clientX,
            y: e.clientY - 125,
            ease: "power2.out"
          });
        }
      });

      slide.addEventListener("mouseleave", () => {
        gsap.to(image, {
          opacity: 0,
          visibility: 'hidden',
          duration: 0.3,
          ease: "power2.out"
        });
      });

      slide.addEventListener("mousemove", (e) => {
        gsap.to(image, {
          x: e.clientX,
          y: e.clientY - 125,
          duration: 0.1,
          ease: "power2.out"
        });
      });
    });
  } else {
    console.error("No se encontraron elementos con las clases '.slide-projects' o '.slider__image-projects'");
  }

  // Marquee Strip
  setTimeout(() => {
    const cardsContainer = document.querySelector("#marquee-text");

    // Duplicate the cards (for wrapping purposes)
    cardsContainer.innerHTML += cardsContainer.innerHTML;

    // Get the DOM references
    const cards = gsap.utils.toArray("#marquee-text .item_marquee");

    function setAnimValues() {
      // Get the correct width
      const cardWidth = innerWidth / (cards.length / 2);
      
      // Set the default position
      cards.forEach((card, i) => 
        gsap.set(card, {
          x: () => i * cardWidth,
          overwrite: "auto"
        })
      );
      
      // Animate the cards
      gsap.to(cards, {
        duration: 20,
        ease: "none",
        x: `+=${innerWidth}`,
        repeat: -1,
        // Wrap the cards when appropriate
        modifiers: {
          x: gsap.utils.unitize(gsap.utils.wrap(-cardWidth, innerWidth * 2 - cardWidth), "px")
        },
      });
    }

    window.addEventListener("resize", setAnimValues);
    setAnimValues();
  }, 500); // Delay to ensure other animations are ready
});
