$(function() {
	
	"use strict";
	
	var topoffset = 50; //variable für Menü höhe
	
	//Anzhal Fotos wird ermittelt
	var slideqty = $('#feature .item').length;
	
	//Höhe des Fensters ermitteln
	var wheight = $(window).height();
	
	//Karusell rng
	var randSlide = Math.floor(Math.random()*slideqty);
	
	
	$('#feature .item').eq(randSlide).addClass('active');
	
	
	$('.fullheight').css('height', wheight);
	
	//IMG aus dem Karusell mit einem Hintergrund werden ausgetauscht
	$('#feature .item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background-image': 'url('+imgSrc+')'});
		$(this).remove();
	});
	
	
	//Höhe der Bilder von .fullheight anpassen, wenn sich Fenstergröße ändert
	$(window).resize(function() {
		wheight = $(window).height();
		$('.fullheight').css('height', wheight);
	});
	
	
	/*activate scrollspy */
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});
	
	
	
	
	/* überprüft auch bei neuladen der Seite, ob sich die Navigation inbody befindet */
	var hash = $(this).find('li.active a').attr('href');
		if(hash !== '#feature') {
			$('header nav').addClass('inbody');	
		} else {
			$('header nav').removeClass('inbody');
			}
	
	
	
	/* sucht sich das href Attribut aus der aktuellen Seitenansicht und soeichert es in Hash 
	fügt class inbody zu nav hinzu, wenn scrollspy event angehauen wird*/
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
		var hash = $(this).find('li.active a').attr('href');
		if(hash !== '#feature') {
			$('header nav').addClass('inbody');	
		} else {
			$('header nav').removeClass('inbody');
			}
	
	});
	
	
	//Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
}); //smooth scrolling
	
	
	//Generiert automatisch die Karusell Inikatoren
	for (var i=0; i < slideqty; i++) {
		var insertText = '<li data-target="#feature" data-slide-to="' + i +'"';
		if (i === randSlide) {
			insertText += ' class="active" ';
		}
		insertText += '></li>';
		$('#feature ol').append(insertText);
	}
	
	
	
	$('.carousel').carousel({
		pause: false
	});
    
    

    
    //ANIMATE CSS
    $(document).ready(function() {
        $('.fadeRight').addClass("hideit").viewportChecker({
            classToAdd: 'showit animated fadeInRight',
            offset: 100
        });
    });
    
    
    $(document).ready(function() {
        $('.fadeLeft').addClass("hideit").viewportChecker({
            classToAdd: 'showit animated fadeInLeft',
            offset: 100
        });
    });
    
    
//    $('#clickme').on('click', function() {
//        $('.more').addClass('showme');
//        $('.more').removeClass('showmenot');
//        
//    });
//    
//    $('#clickmeaway').on('click', function() {
//        $('.more').addClass('showmenot');
//        $('.more').removeClass('showme');
//    });
//    
//    
//    
//    
//     $('#clickme2').on('click', function() {
//        $('.more2').addClass('showme');
//        $('.more2').removeClass('showmenot');
//        
//    });
//    
//    $('#clickmeaway2').on('click', function() {
//        $('.more2').addClass('showmenot');
//        $('.more2').removeClass('showme');
//    });
//    
//    
//    
//     $('#clickme3').on('click', function() {
//        $('.more3').addClass('showme');
//        $('.more3').removeClass('showmenot');
//        
//    });
//    
//    $('#clickmeaway3').on('click', function() {
//        $('.more3').addClass('showmenot');
//        $('.more3').removeClass('showme');
//    });
//    
//    
//    
//     $('#clickme4').on('click', function() {
//        $('.more4').addClass('showme');
//        $('.more4').removeClass('showmenot');
//        
//    });
//    
//    $('#clickmeaway4').on('click', function() {
//        $('.more4').addClass('showmenot');
//        $('.more4').removeClass('showme');
//    });
//    
//    
//    
//     $('#clickme5').on('click', function() {
//        $('.more5').addClass('showme');
//        $('.more5').removeClass('showmenot');
//        
//    });
//    
//    $('#clickmeaway5').on('click', function() {
//        $('.more5').addClass('showmenot');
//        $('.more5').removeClass('showme');
//    });
//    
//    
//    
//     $('#clickme6').on('click', function() {
//        $('.more6').addClass('showme');
//        $('.more6').removeClass('showmenot');
//        
//    });
//    
//    $('#clickmeaway6').on('click', function() {
//        $('.more6').addClass('showmenot');
//        $('.more6').removeClass('showme');
//    });
//    
    
   
    
    
    
    
    
	
	
});