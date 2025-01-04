//responsive//
$('.response-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // year//
  const d = new Date()
  document.getElementById("demo").innerHTML = d.getFullYear();

  // counter //
  var a = 0;
  $(window).scroll(function () {
  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
      $('.counter').each(function () {
      var $this = $(this);
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
          duration: 4000,
          easing: 'swing',
          step: function () {
          $this.text(Math.ceil(this.Counter));
          }
      });
      });
      a = 1;
  }
  });

// validate Form //
let contact = document.getElementById('submit');
contact.addEventListener("click",function(e){
  let name = document.getElementById('name').value;
  let number = document.getElementById('number').value;
  let email = document.getElementById('email').value;
  let comments = document.getElementById('comments').value;

  var valid = true ;
  if(name == 0 ){
      document.getElementById('namerror').style.display='block';
      valid= false;
  }
  else{
    document.getElementById('namerror').style.display='none';
  }
   if(number == '' || number.length !== 10){
    document.getElementById('numberror').style.display='block';
   }
   else{
    document.getElementById('numberror').style.display='none';
   }
   if(email == '')
   {
    document.getElementById('emailerror').style.display='block';
   }
   else{
    document.getElementById('emailerror').style.display='none';
   }
   if(comments == ''){
    document.getElementById('commenterror').style.display='block';
   }
   else{
    document.getElementById('commenterror').style.display='none';
   }
   if(valid == true)
   {
    $('.success').show();
   }


e.preventDefault();
});

//video button//

$(function(){

  function playVideo(e) {

      var video = $(e.target).closest('.group').find('video')[0];

          if (video.paused) {
              video.play();
              video.muted = false;
          } else {
              video.pause();
              video.muted = true;
          }

          // Loads the clip again, so that it reverts back to the poster image
          video.addEventListener("ended", function(){
              video.load();

              // $("ply-btn").find("i").removeClass("fa-pause");
              $(".play-button").addClass("d-none");
          });
       }

      $(".play-button").click(playVideo);
 });
 
// Arrow icon//

(function($) { "use strict";

	$(document).ready(function(){"use strict";
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
	});
	
})(jQuery);