$(document).ready(function(){
	var screenHeight = $(window).height() - 162;
	var productHeight = $('.container-product').height() + 100;
	$(".screen").height(Math.max(screenHeight, productHeight));
});