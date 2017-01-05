$("document").ready(function(){
	$(".readMore.one").click(function(event){
		console.log('happening');
		event.preventDefault();
		$(".readMore.one").hide();
		$(".showThisOnClick.one").slideDown(300);
		$(".showThisOnClick.one").removeClass("hide");
		$(".readLess.one").removeClass("hide");
		});

	$(".readLess.hide.one").click(function(event){
		event.preventDefault();
		$(".readLess.one").addClass("hide");
		$(".showThisOnClick.one").slideUp(300);
		$(".readMore.one").show();
		});	

	$(".readMore.two").click(function(event){
		console.log('happening');
		event.preventDefault();
		$(".readMore.two").hide();
		$(".showThisOnClick.two").slideDown(300);
		$(".showThisOnClick.two").removeClass("hide");
		$(".readLess.two").removeClass("hide");
		});

	$(".readLess.hide.two").click(function(event){
		event.preventDefault();
		$(".readLess.two").addClass("hide");
		$(".showThisOnClick.two").slideUp(300);
		$(".readMore.two").show();
		});	
	
	var offset = 50;
	var duration = 200;

	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			//if scroll more than the offset var
	$(".back-to-top").fadeIn(duration);
			//fade in the arrow
	} 
		else {
	$(".back-to-top").fadeOut(duration);
			//when scroll less than the offset, arrow fade out
		}
    });

	$(".back-to-top").click(function(event) {
		//when arrow is clicked
	event.preventDefault();
	$('html, body').animate({scrollTop: 0}, duration);
	return false;
		//scroll to top of page
	});	
});








// $("document").ready(function() {
// 	var offset = 50;
// 	var duration = 200;

// 	$(window).scroll(function() {
// 		if ($(this).scrollTop() > offset) {
// 			//if scroll more than the offset var
// 	$(".back-to-top").fadeIn(duration);
// 			//fade in the arrow
// 	} 
// 		else {
// 	$(".back-to-top").fadeOut(duration);
// 			//when scroll less than the offset, arrow fade out
// 	}
// });

// 	$(".back-to-top").click(function(event) {
// 		//when arrow is clicked
// 	event.preventDefault();
// 	$('html, body').animate({scrollTop: 0}, duration);
// 	return false;
// 		//scroll to top of page
// 	})
// });
// 			