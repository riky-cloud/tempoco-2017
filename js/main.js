/*
==============
JS for - New TEMPO.CO 2017
Developed and Customized by
Muhammad Adam Firdaus
http://www.muhammadadamfirdaus.com/
==============
 */

$(function(){
	// PreLoad
	// setTimeout(function removepreload(){
	// 	$('#preload').hide();
	// 	$('.container').css({'visibility':'visible'});
	// }, 3000);

	// if(!localStorage.getItem('viewed')){
  //   setTimeout(function () {
  //     console.log('pertama-kali');
  //     localStorage.setItem('viewed','yes');
  //   }, 8000);
	// };

	var tempo2017forthefirsttime = new Swiper('.tempo-2017-tutorial', {
		pagination: '.swiper-pagination',
		paginationClickable: true
	});

	// Go To
	$('a[href^="#"].scroll').on('click', function(){
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top
		}, 2000);
		return false;
	});

	/* head focus */
	var headFocus = new Swiper('.head-focus', {
		pagination: '.swiper-pagination',
		nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
		paginationClickable: true,
		direction: 'vertical',
		autoplay: 2000,
		autoplayDisableOnInteraction: false,
		loop: true,
		spaceBetween: 20,
		onAutoplayStop: function(){
			setTimeout(function(){
				headFocus.updateContainerSize();
			}, 2000);
		}
	});
	/* end head focus */

	/* desktop menu */


	var submenuDesktop = $(this).find('.sub ul');
	$('.menu li.sub').on('mouseenter', function(){
		// console.log('ox');
		$(this).not(submenuDesktop).addClass('sub-menu-active');
		$(this).siblings(submenuDesktop).removeClass('sub-menu-active');
	}).on('mouseleave', function(){
		$('.sub').removeClass('sub-menu-active');
	});
	/* end desktop menu */

  function resetmobileMenu(){
    $('.menu').removeClass('menu-collapsed menu-expanded');
    menubutton.removeClass('close');
    $('#menu-button').detach();
  }

  function mobileMenu(){
    menubutton = $('.menu-mobile');
		menu = $('.menu');

    if($('.menu-mobile a').filter(function() {
        return $.trim($.text(this)) === 'Close';
      }).length){
      $('.menu-mobile a').html('Menu');
    }

    function menumobileexpand(){
      if(menu.hasClass('menu-expanded')){
        menubutton.removeClass('close');
        removemenumobile();
      } else {
        menubutton.addClass('close');
        menu.addClass('menu-expanded').removeClass('menu-collapsed');
      }

      if($('.close').length){
        $('.menu-mobile a').html('Close');
      } else {
        $('.menu-mobile a').html('Menu');
      }
    }

    function removemenumobile(){
      if($('.menu-collapsed').length){
        menu.removeClass('menu-collapsed');
      } else {
        menu.removeClass('menu-expanded').addClass('menu-collapsed').delay(1000).queue(function(){
          $('.sub').css({'display':'none'});
        });
      }
    }

    removemenumobile();

    /* buka menu */
    $('.menu-mobile').on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();

      menumobileexpand();
    });

    /* klik link menunya */
    $('.menu a').off('click').on('click', function(e){
      e.stopImmediatePropagation();
      return true;
    });

		$('.night-mode-button').off('click').on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();

			if($('.night-mode-button-active').length){
				console.log('night mode off');
				$('.night-mode-button').removeClass('night-mode-button-active');
				// setTimeout(function(){
					$('.container').removeClass('night-mode');
				// }, 2200);
			} else {
				console.log('night mode activated');
				$('.night-mode-button').addClass('night-mode-button-active');
				// setTimeout(function(){
					$('.container').addClass('night-mode');
				// }, 2200);
			}
    });

    /* expand collapse sub menu */
		$('.has-sub').off('click').on('click', function(e){
			e.preventDefault();
      e.stopPropagation();
			var submenu = $(this).find('.sub');
			$('.sub').not(submenu).css({'display':'none'});
			submenu.css({'display':'block'});
		});

		/* tutup menu */
		$(document).on('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			if(e.target.className != 'menu-mobile'){
				removemenumobile();

				menubutton.removeClass('close');
				$('.menu-mobile a').html('Menu');
				menu.removeClass('menu-expanded').addClass('menu-collapsed').delay(1000).queue(function(){
					$('.sub').css({'display':'none'});
				});
			}
		});
	}

	var submenuDesktop = $(this).find('.sub ul');
	$('.menu li.sub').on('mouseenter', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		// console.log('ox');
		$(this).not(submenuDesktop).addClass('sub-menu-active');
		$(this).siblings(submenuDesktop).removeClass('sub-menu-active');
	}).on('mouseleave', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		$('.sub').removeClass('sub-menu-active');
	});

	/* tab */
	$('.tab .tab-pagination a').on('click', function(e) {
    var $tabs = $(this).closest('.tab');
    $tabs.find('.tab-pagination a.current').removeClass('current');
    $(this).addClass('current');

    $tabs.find('div.tab-content-slide:not(:hidden)').removeClass('selected');
    $(this.hash).addClass('selected');

    e.preventDefault();
  });

	var subTab = $(this).find('.sub-tab ul');
	$('.tab-pagination li.sub-tab').on('mouseenter', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		// console.log('ox');
		$(this).not(subTab).addClass('sub-tab-active');
		$(this).siblings(subTab).removeClass('sub-tab-active');
	}).on('mouseleave', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		$('.sub-tab').removeClass('sub-tab-active');
	});
	/* end tab */

	/* onscroll */
	var stickyheader = $('.premium-head');
	var stickyrectangle3 = $('.r3');
	var section3 = $('.kanal-pilihan');
	var jarakheader = stickyheader.offset().top;
	var jarakstickyrectangle3 = stickyrectangle3.offset().top;
	var overSection3 = stickyrectangle3.offset().top + 380;

	var timer;
	function sticky(){
		var scroll = getCurrentScroll();
    if(scroll > jarakheader){
			$('.premium-head').css('margin-top', '195px');
			$('header').addClass('sticky sticky-header');
    } else {
			$('.premium-head').css('margin-top', '10px');
    	$('header').removeClass('sticky sticky-header');
		}

		if(scroll > jarakstickyrectangle3){
			$('.r3').css('margin-top', '60px');
			$('.r3').removeClass('lepas').addClass('sticky sticky-r3');
		} else {
			$('.r3').css('margin-top', 'inherit');
			$('.r3').removeClass('sticky sticky-r3');
		}

		if(scroll > overSection3){
			// console.log('hi');
			$('.r3').css('margin-top', 'inherit');
			$('.r3').addClass('lepas').removeClass('sticky-r3');
		}
	}

  $(window).on('scroll', function(){
		/* clear the old timeout */
    clearTimeout(timer);
    /* wait until 400 ms for callback */
    timer = setTimeout(sticky, 0);
	});

	function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

	var fotoHome = new Swiper('.foto-home', {
      pagination: '.swiper-pagination',
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflow: {
        rotate: 30,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows : true
      }
  });

	// Ads

	// bottom ads
  if($('.bottom-banner').length){
    var bottomAdsCloseButton = $('.bottom-banner button');
    bottomAdsCloseButton.on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      // console.log('closing');
      $('.bottom-banner').addClass('bottom-banner-closed');
    });
  }

	// premium head
  if($('.premium-head').length){
		var premiumHead = $('.premium-head');
    var premiumSmall = $('.premium-head-small');
    var premiumBig = $('.premium-head-big');
    premiumHead.on('mouseenter', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      // console.log('opening');
	    premiumSmall.addClass('deactive');
	    premiumBig.addClass('active');
    });
		premiumHead.on('mouseleave', function(e){
			e.preventDefault();
			e.stopImmediatePropagation();
			premiumSmall.removeClass('deactive');
			premiumBig.removeClass('active');
		});
  }

	// popup ads
	if($('.popup-ads').length){
		var popupAdsCloseButton = $('.popup-ads button');
		setTimeout(function(){
			$('.popup-ads').addClass('active');
		}, 3000);
		setTimeout(function(){
			$('.popup-ads').addClass('popup-ads-closed');
		}, 15000);
		popupAdsCloseButton.on('click', function(e){
			e.preventDefault();
			e.stopImmediatePropagation();
			// console.log('closing');
			$('.popup-ads').addClass('popup-ads-closed');
		});
	}



	function windowopen(url, title, w, h) {
	    // Fixes dual-screen position Most browsers Firefox
	    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
	    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

	    width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
	    height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

	    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
	    var top = ((height / 2) - (h / 2)) + dualScreenTop;
	    var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

	    // Puts focus on the newWindow
	    if (window.focus) {
	        newWindow.focus();
	    }
	}

	// Google Analytics
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-57161828-3', 'auto', {'allowAnchor': true});
	ga('set', {
		page: '/#terbaru'
	});

	ga('send', 'pageview', {
		'page': location.pathname + location.search + location.hash
	});

	// Google Tag Manager
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TVGQF5T');
});
