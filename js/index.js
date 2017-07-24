$(document).ready(function(){
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
});