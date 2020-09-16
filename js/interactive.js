$(document).ready(function () {
  $("#logo, .footer").hide();
 $("#logo, .footer").show();
  $("#logo, .footer").fadeOut(0);
 $("#logo, .footer").fadeIn(4500);
  TweenMax.to("#logo, .footer", 2, { ease: Power2.easeInOut });
	
	
  //--Grapgic Design Strats--//

	 $("#desi_t").mouseover(function () {
    TweenMax.to(this, 0.3, { opacity: 0.5, scale: 1.5 });
    TweenMax.to(".gdesign_p, .gdesign_polygon, #desi_t", 0.3, { opacity: 0.5, scale: 1.2 });
  });

	// click and modify the underlined values
	
	
  $("#desi_t").mouseout(function () {
    TweenMax.to(this, 0.3, { opacity: 0.5, scale: 1.5 });
    TweenMax.to(".gdesign_p, .gdesign_polygon, #desi_t", 0.3, { opacity: 1, scale: 1 });
  });
	
	  //--Grapgic Design Ends--//
	
	//--Websites Strats--//
$("#website_t").mouseover(function () {
    TweenMax.to(this, 0.3, { opacity: 0.5, scale: 1.5 });
    TweenMax.to(".websites, .Website_polygon, #website_t", 0.3, { opacity: 0.5, scale: 1.2});
  });

  $("#website_t").mouseout(function () {
    TweenMax.to(this, 0.3, { opacity: 0.5, scale: 1.5 });
    TweenMax.to(".websites, .Website_polygon, #website_t", 0.3, { opacity: 1, scale: 1 });
  });
	  //--Websites Ends--//

  //--portofolio Strats--//

  $("#pf_t").mouseover(function () {
    TweenMax.to(this, 0.3, { opacity: 0.5, scale: 1.5 });
    TweenMax.to(".porpolout, .portofolio, #pf_t", 0.3, { opacity: 0.5, scale: 1.2 });
  });

  $("#pf_t").mouseout(function () {
    TweenMax.to(this, 0.3, { opacity: 0.5, scale: 1.5 });
    TweenMax.to(".porpolout, .Portofolio, #pf_t", 0.3, { opacity: 1, scale: 1 });
  });
	  //--portofolio Ends--//
	
   
  //--About Strats--//
$("#about_t").mouseover(function () {
    TweenMax.to(this, 0.3, { opacity: 0.5, scale: 1.5 });
    TweenMax.to(".aboutout, .about_polygon, #about_t", 0.3, { opacity: 0.5, scale: 1.2});
  });

  $("#about_t").mouseout(function () {
    TweenMax.to(this, 0.3, { opacity: 0.5, scale: 1.5 });
    TweenMax.to(".aboutout, .about_polygon, #about_t", 0.3, { opacity: 1, scale: 1 });
  });
  //--About Ends--//
	
  //--Contact Strats--//

  $("#contact_t").mouseover(function () {
    TweenMax.to(this, 0.3, { opacity: 0.5, scale: 1.5 });
    TweenMax.to(".copoout, .contact_polygon, #contact_t", 0.3, {opacity: 0.5, scale: 1.2});
  });

  $("#contact_t").mouseout(function () {
    TweenMax.to(this, 0.3, { opacity: 0.5, scale: 1.5 });
    TweenMax.to(".copoout, .contact_polygon, #contact_t", 0.3, { opacity: 1, scale: 1 });
  });  
	//--Contact Ends--//


  //--Grapgic Design--//

  var tl = new TimelineLite();

  tl.from(".gdesign_p,#desi_t", 1, { opacity: 0, scale: 5 }).to(".card", 10, {
    rotationY: -480,
    repeat: 2,
    yoyo: true,
  });

  $("span.clickme")
    .mouseover(function (event) {
      createTooltip(event);
    })
    .mouseout(function () {
      // create a hidefunction on the callback if you want
      //hideTooltip();
    });

  function createTooltip(event) {
    $('<div class="tooltip">test</div>').appendTo("body");
    positionTooltip(event);
  }

  function positionTooltip(event) {
    var tPosX = event.pageX - 100;
    var tPosY = event.pageY - 150000;
    $("#logobo,#log_t").css({ position: "absolute", top: tPosX, left: tPosY });
  }
	
	//--website--//

  var tl = new TimelineLite();

  tl.from(".websites,#website_t", 1, { opacity: 0, scale: 5 }).to(".card", 10, {
    rotationY: -480,
    repeat: 2,
    yoyo: true,
  });

  $("span.clickme")
    .mouseover(function (event) {
      createTooltip(event);
    })
    .mouseout(function () {
      // create a hidefunction on the callback if you want
      //hideTooltip();
    });

  function createTooltip(event) {
    $('<div class="tooltip">test</div>').appendTo("body");
    positionTooltip(event);
  }

  function positionTooltip(event) {
    var tPosX = event.pageX - 100;
    var tPosY = event.pageY - 150000;
    $("#logobo,#log_t").css({ position: "absolute", top: tPosX, left: tPosY });
  }

  
  //-- PORTFOLIO--//

  var tl = new TimelineLite();

  tl.from(".porpolout", 1, { opacity: 0, scale: 5 }).to(".card", 13, {
    rotationY: -180,
    repeat: 2,
    yoyo: true,
  });

  $("span.clickme")
    .mouseover(function (event) {
      createTooltip(event);
    })
    .mouseout(function () {
      // create a hidefunction on the callback if you want
      //hideTooltip();
    });

  function createTooltip(event) {
    $('<div class="tooltip">test</div>').appendTo("body");
    positionTooltip(event);
  }

  function positionTooltip(event) {
    var tPosX = event.pageX - 10;
    var tPosY = event.pageY - 100;
    $(".porpolout,#pf_t").css({
      position: "absolute",
      top: tPosY,
      left: tPosX,
    });
  }

  //-- ABOUT--//

  var tl = new TimelineLite();

  tl.from(".aboutout,#about_t", 1, { opacity: 0, scale: 11 }).to(".card", 10, {
    delay: 20,
    rotationY: -180,
    repeat: 2,
    yoyo: true,
  });

  $("span.clickme")
    .mouseover(function (event) {
      createTooltip(event);
    })
    .mouseout(function () {
      // create a hidefunction on the callback if you want
      //hideTooltip();
    });

  function createTooltip(event) {
    $('<div class="tooltip">test</div>').appendTo("body");
    positionTooltip(event);
  }

  function positionTooltip(event) {
    var tPosX = event.pageX - 10;
    var tPosY = event.pageY - 100;
    $(" .aboutout,#about_t").css({
      position: "absolute",
      top: tPosY,
      left: tPosX,
    });
  }
	//-- CONTACT--//

  var tl = new TimelineLite();

  tl.from(".contact_polygon,#contact_t", 1, { opacity: 0, scale: 10 }).to(".card", 10, {
    rotationY: -180,
    repeat: 2,
    yoyo: true,
  });

  $("span.clickme")
    .mouseover(function (event) {
      createTooltip(event);
    })
    .mouseout(function () {
      // create a hidefunction on the callback if you want
      //hideTooltip();
    });

  function createTooltip(event) {
    $('<div class="tooltip">test</div>').appendTo("body");
    positionTooltip(event);
  }

  function positionTooltip(event) {
    var tPosX = event.pageX - 100;
    var tPosY = event.pageY - 150000;
    $(".contact_polygon,#contact_t").css({
      position: "absolute",
      top: tPosY,
      left: tPosX,
    });
  }
      //porpolout

	  TweenMax.from('.porpolout', 2, { ease: Back.easeOut.config(20), rotation:90});
    
           $('.porpolout').mouseover(function(){
          TweenMax.to(this, .5, { ease: Back.easeOut.config(10), scale: 1.2});
    }); 
    $('.porpolout').mouseout(function(){
          TweenMax.to(this, .5, { ease: Power4.easeIn,delay:1, scale: 1});
    }); 
    $('.porpolout').click(function(){
       TweenMax.to(this, .5, { ease: Back.easeInOut.config(1.7),rotation:360});
    }); 
	
//Graphic Design
	TweenMax.from('.gdesign_p', 2, { ease: Back.easeOut.config(22), rotation:90});
    
           $('.gdesign_p').mouseover(function(){
          TweenMax.to(this, .5, { ease: Back.easeOut.config(10), scale: 1.2});
    }); 
     $('.gdesign_p').mouseout(function(){
          TweenMax.to(this, .5, { ease: Power4.easeIn,delay:1, scale: 1});
     }); 
     $('.gdesign_p').click(function(){
      
          TweenMax.to(this, .5, { ease: Back.easeInOut.config(1.7),rotation:360});
    }); 
	
//websites
	TweenMax.from('.websites', 2, { ease: Back.easeOut.config(30), rotation:90});
     $('.websites').mouseover(function(){
          TweenMax.to(this, .5, { ease: Back.easeOut.config(10), scale: 1.2});
     }); 
     $('.websites').mouseout(function(){
          TweenMax.to(this, .5, { ease: Power4.easeIn,delay:1, scale: 1});
    }); 
     $('.websites').click(function(){
       TweenMax.to(this, .5, { ease: Back.easeInOut.config(1.7),rotation:360});
    }); 
	
//aboutout
	TweenMax.from('.aboutout', 2, { ease: Back.easeOut.config(30), rotation:90});
    
           $('.aboutout').mouseover(function(){
          TweenMax.to(this, .5, { ease: Back.easeOut.config(10), scale: 1.2});
    }); 
    $('.aboutout').mouseout(function(){
          TweenMax.to(this, .5, { ease: Power4.easeIn,delay:1, scale: 1});
    }); 
    $('.aboutout').click(function(){
       TweenMax.to(this, .5, { ease: Back.easeInOut.config(1.7),rotation:360});
     }); 
	
	//aboutout
	TweenMax.from('.contact', 2, { ease: Back.easeOut.config(30), rotation:90});
    
           $('.contact').mouseover(function(){
          TweenMax.to(this, .5, { ease: Back.easeOut.config(10), scale: 1.2});
    }); 
     $('.contact').mouseout(function(){
          TweenMax.to(this, .5, { ease: Power4.easeIn,delay:1, scale: 1});
    }); 
    $('.contact').click(function(){
       TweenMax.to(this, .5, { ease: Back.easeInOut.config(1.7),rotation:360});
    }); 
	

	
});






























