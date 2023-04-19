/*----------sticky-header-----------*/


header{
    position:fixed;
    width: 100%;
    background: #2F5349;
    color: #fff;
    font-family: 'PT Sans', sans-serif;
    transition: all 0.4s ease;
    z-index: 99999;
  }
header.sticky {
    background: rgba(47, 83, 73,0.8);
    backdrop-filter: blur(5px);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px 0;

  }
  
 
.site-header {
    padding: 30px 0;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    background-color: #2F5349;
    position:fixed;
    transition: all 0.4s ease;
}

.site-header .wrap {
    max-width: 1400px;
}

$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('.site-header').addClass("sticky");
		  }
		  else{
			$('.site-header').removeClass("sticky");
		  }
	});



/*----------Menu Toggle----------*/


 $(".menu-toggle").click(function() {
        $(this).toggleClass("on");
        $(".navbar").slideToggle();
    });



/*-----------Responsive-Tab-------------*/


$(document).ready(function() {
    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'accordion'
    });
});



/*-------Scroll to top----------*/



<a href="#" id="scroll" style="display: none;"><span></span></a>

	
#scroll {
    position:fixed;
    right:10px;
    bottom:10px;
    cursor:pointer;
    width:50px;
    height:50px;
    background-color:#3498db;
    text-indent:-9999px;
    display:none;
    -webkit-border-radius:60px;
    -moz-border-radius:60px;
    border-radius:60px
}
#scroll span {
    position:absolute;
    top:50%;
    left:50%;
    margin-left:-8px;
    margin-top:-12px;
    height:0;
    width:0;
    border:8px solid transparent;
    border-bottom-color:#ffffff;
}
#scroll:hover {
    background-color:#e74c3c;
    opacity:1;filter:"alpha(opacity=100)";
    -ms-filter:"alpha(opacity=100)";
}


$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});


/*----------- Accordian-------------*/


$(".about__vision h2").click(function() {
    $(this).next().slideToggle();
     $(this).toggleClass('active');
});



/*-------Number-count--------*/

 <h1>
     <span class="counter">
         2,523
    </span>
</h1>


$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});



/*---------slick-slider----------*/


$(document).ready(function(){
    $('.herobanner__img').slick({
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 0,
        adaptiveHeight: true,
        pauseOnHover:false
      });
  });
