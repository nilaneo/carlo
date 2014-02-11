$(document).ready(function(){
	var screenHeight = $(window).height() - 162,
		contentHeight = $(window).height() - 237,
		productHeight = $('.container-product').height() + 100,
		contactsHeight = $('.block-contacts').height() + 100;
	$(".screen").height(Math.max(screenHeight, productHeight));

	$(".screen-2").height(Math.max(contentHeight, contactsHeight));

	// Closing popup

	$(".btn-close-popup").on("click", function(){
		$(this).closest(".popup-wrapper").hide();
	});	
});