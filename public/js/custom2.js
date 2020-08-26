

$(document).ready(function() {
  // $('.tp-parallax-wrap').css("top","600px !important");

    // Gets the video src from the data-src on each button
    
    var $videoSrc;  
    $('.video-btn').click(function() {
      // // console.log("this-check");
        $videoSrc = $(this).data( "src" );
    });
    // // console.log("videoSrc",$videoSrc);
    
      
      
    // when the modal is opened autoplay it  
    $('#watchVideoHeader').on('shown.bs.modal', function (e) {
        
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
      
    
    
    // stop playing the youtube video when I close the modal
    $('#watchVideoHeader').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) ;
   
    // });







    $('.show-application-content').hover(

      (e)=>{
        var content = $($(e.target).parent().siblings()[0]).children()[0];
        var overlay = $(content).find('.content-overlay');
        var details = $(content).find('.content-details');

      $(overlay).fadeTo("fast",1);
      $(overlay).css({
        "transition": "all 0.4s ease-in-out 0s",
        
      });
      $(details).fadeTo("fast",1);
      // $(details).fadeIn().css({top:80});
       
      $(details).css({"top":"50%","left":"50%",
      "transition":' all 0.3s ease-in-out 0s',
    });
   
    },
    (e)=>{
      var content = $($(e.target).parent().siblings()[0]).children()[0];
      var overlay = $(content).find('.content-overlay');
      var details = $(content).find('.content-details');

    $(overlay).fadeTo("fast",0);
    $(details).fadeTo("fast",0);
    },
    )



    // Add event on document scroll
    $(window).scroll(function() {
    //    // // console.log("scroll");
       
      // Cycle through each counter
      $(".counter").each(function() {
         // // console.log("count",this);
         
        // Check if counter is visible
        if ($(this).isOnScreen()) {
  
          // Start counter
          startCounter($(this));
  
        } else {
  
          // Check if it has only just become non-visible
          if ($(this).hasClass("notVisible") == false) {
  
            // Stop animation
            $(this).stop();
  
            // Add nonVisible class
            $(this).addClass("notVisible");
            
            // This stops the user very briefly seeing the previous number before the counter restarts
            $(this).text("0");
  
          }
  
        }
      });
    });
  });
  
  
  // Check if an element is on screen
  // Thanks to Adjit - taken from the url below
  // Reference : https://stackoverflow.com/questions/23222131/jquery-fire-action-when-element-is-in-view#answer-23222523
  $.fn.isOnScreen = function() {
  
    var win = $(window);
  
    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };
  
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
  
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
  
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
  
  
  };
  
  
  //Run counter, separate function so we can call it from multiple places
  function startCounter(counterElement) {
    // // console.log("count startssss");
    
    // Check if it has only just become visible on this scroll
    if (counterElement.hasClass("notVisible")) {
  
      // Remove notVisible class
      counterElement.removeClass("notVisible");
  
      // Run your counter animation
      counterElement.prop('Counter', 0).animate({
        Counter: counterElement.attr("counter-lim")
      }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
          counterElement.text(Math.ceil(now).toLocaleString());
        }
      });
    }
  }
  
// ++  
  // On page load check if counter is visible
  $('.counter').each(function() {
  
    // Add notVisible class to all counters
    // It is removed within startCounter()
    $(this).addClass("notVisible");
  
    // Check if element is visible on page load
    if ($(this).isOnScreen() === true) {
       // // console.log("counter started");
      // If visible, start counter
      startCounter($(this));
  
    }
  
  });
      
// if element visible in viewport-------------------
//   $(window).scroll(function() {
//     var top_of_element = $("#element").offset().top;
//     var bottom_of_element = $("#element").offset().top + $("#element").outerHeight();
//     var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
//     var top_of_screen = $(window).scrollTop();

//     if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
//         // the element is visible, do something
//     } else {
//         // the element is not visible, do something else
//     }
// });


function gotoAboutPage() {

  window.location.href = "http://127.0.0.1:5500/public/about-us.html";
}

function checkData(e) {
// // console.log(e.target.value);
}
    
// function submit (e){
//   e.preventDefault();

//     // // console.log("event focusout fired",e);
//   }


// function checkWidth() {
//   // // console.log("resizeing------------------");

//   if ($(window).width() < 768) {
//     // console.log("resizeing------------------",$(window).width());
//     // console.log("id check", $('#why-section-slider'));
    
//       $('#why-section-slider')[0].carousel({
//         pause: true,
//         interval: false
//     });
//   } else {
//       $('#menu2').removeClass('f-nav');
//   }
// }

// $(window).resize(checkWidth);
// // console.log("rrrrrrrrrrrrrrrrrrrrrrrrr");

setTimeout(()=>{
$('.drone-flying-img').css("width","100px !important");
console.log("okkk",$('.drone-flying-img'));
},5000)