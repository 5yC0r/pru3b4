$(document).ready(function () {
	$( ".cuadro" ).hover(
	  function() {
	    $(this).find(' .pricing-content .amount').addClass( "new-amount" );
	    $(this).find(' .pricing-content .amount').removeClass( "amount" );
	    $(this).find(' .pricing-title').addClass( "new-pricing-title" );
	    $(this).find(' .pricing-title').removeClass( "pricing-title" );
	    $(this).addClass( "dynamic-table" );
	    $(this).removeClass( "static-table" );
	    $(this).find(' .info').addClass( "new-info" );
	    $(this).find(' .info').removeClass( "info" );
	  }, function() {
	  	$(this).find(' .pricing-content .new-amount' ).addClass( "amount" );
	    $(this).find(' .pricing-content .new-amount' ).removeClass( "new-amount" );
	    $(this).find(' .new-pricing-title').addClass( "pricing-title" );
	    $(this).find(' .new-pricing-title').removeClass( "new-pricing-title" );
	    $(this).addClass( "static-table" );
	    $(this).removeClass( "dynamic-table" );
	    $(this).find(' .new-info').addClass( "info" );
	    $(this).find(' .new-info').removeClass( "new-info" );
	  }
	);
});

