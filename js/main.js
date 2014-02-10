$(document).ready(function(){
	var screenHeight = $(window).height() - 162;
	var productHeight = $('.container-product').height() + 100;
	$(".screen").height(Math.max(screenHeight, productHeight));

	// Closing popup

	$(".btn-close-popup").on("click", function(){
		$(this).closest(".popup-wrapper").hide();
	});

	// 	Changing quantity and price of order

	// var $minus = $(".minus"),
	// 	$plus = $(".plus");

	// $minus.on("click", function() {
	// 	var currentOrder = $(this).closest(".row-order"),
	// 		quantityNumber = currentOrder.find(".quantity-number"),
	// 		price = parseInt(currentTyre.find(".price-one").find("span").html()),
 //        	count = parseInt(quantityNumber.html()) - 1;
 //        count = count < 1 ? 1 : count;
 //        quantityNumber.html(count);
 //        quantityNumber.change();
 //        priceSet.find("span").html(parseInt(quantityNumber.html()) * priceOne);
 //        priceSet.find("span").change;
 //    });

 //    $plus.on("click", function() {
 //    	var currentTyre = $(this).parents(".chosen-tyre"),
	// 		quantityNumber = currentTyre.find(".quantity-number"),
	// 		priceOne = parseInt(currentTyre.find(".price-one").find("span").html()),
	// 		priceSet = currentTyre.find(".price-set");
 //        quantityNumber.html(parseInt(quantityNumber.html()) + 1);
 //        quantityNumber.change();
 //        priceSet.find("span").html(parseInt(quantityNumber.html()) * priceOne);
 //        priceSet.find("span").change;
 //    });
});