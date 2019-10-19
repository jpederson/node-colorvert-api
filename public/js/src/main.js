

$(function(){
	
	// get the individual value of a particular 
	var get_part_value = function( part ) {
		return $( "#"+part ).val();
	},


	// convert colors
	get_colors = function(){

		// get the selected color space
		var space = $("#space").val(),
			endpoint;

		// depending on the current color space, build our color conversion endpoint urls.
		switch ( space ) {

			// deal with cmyk conversions
			case "cmyk":
				endpoint = "/cmyk/" + get_part_value( "cmyk-c" ) +
					"/" + get_part_value( "cmyk-m" ) +
					"/" + get_part_value( "cmyk-y" ) +
					"/" + get_part_value( "cmyk-k" );
			break;

			// deal with hex conversions
			case "hex":
				endpoint = "/hex/" + get_part_value( "hex" );
			break;

			// deal with hsl conversions
			case "hsl":
				endpoint = "/hsl/" + get_part_value( "hsl-h" ) +
					"/" + get_part_value( "hsl-s" ) +
					"/" + get_part_value( "hsl-l" );
			break;

			// deal with hsv conversions
			case "hsv":
				endpoint = "/hsv/" + get_part_value( "hsv-h" ) +
					"/" + get_part_value( "hsv-s" ) +
					"/" + get_part_value( "hsv-v" );
			break;

			// deal with lab conversions
			case "lab":
				endpoint = "/lab/" + get_part_value( "lab-l" ) +
					"/" + get_part_value( "lab-a" ) +
					"/" + get_part_value( "lab-b" );
			break;

			// deal with rgb conversions
			case "rgb":
				endpoint = "/rgb/" + get_part_value( "rgb-r" ) +
					"/" + get_part_value( "rgb-g" ) +
					"/" + get_part_value( "rgb-b" );
			break;

			// deal with xyz conversions
			case "xyz":
				endpoint = "/xyz/" + get_part_value( "xyz-x" ) +
					"/" + get_part_value( "xyz-y" ) +
					"/" + get_part_value( "xyz-z" );
			break;

		}

		// get the results for the current set of colors.
		$.getJSON( endpoint, function( response ){

			// manipulate the URL before we output it in the response div.
			var url = window.location + endpoint.substring( 1 );

			// set it into the response div
			$(".response").html( "<pre><strong>URL:</strong><br><a href='" + url + "' target='_blank'>" + url + "</a><br><br><strong>Response:</strong><br>" + JSON.stringify( response, null, 3 ) + "</pre>" );

			// set colors on body text and background.
			$("body").css( "background-color", response.hex ).css( "color", response.hex_readable );
			$("a").css( "color", response.hex_readable ).css( "border-color", response.hex_readable );

			$('.results .hex').html( response.hex );
		
			$('.results .lab').html( JSON.stringify( response.lab ) );
		
			$('.results .hsl').html( JSON.stringify( response.hsl ) );
		
			$('.results .xyz').html( JSON.stringify( response.xyz ) );
		
			$('.results .cmyk').html( JSON.stringify( response.cmyk ) );
		
			$('.results .hsv').html( JSON.stringify( response.hsv ) );
		
			$('.results .rgb').html( 'rgb( ' + response.rgb.r + ', ' + response.rgb.g + ', ' + response.rgb.b + ')' );
		
		});

	};


	// when they select a color space, change the fields
	$("#space").change(function(){

		// hide visible fieldsets
		$("fieldset.visible").removeClass( "visible" );

		// show the one they chose
		$("fieldset").filter("."+$(this).val()).addClass( "visible" );

	});


	// when they click the convert button, get the results
	$("#convert").click( get_colors );


	// on keyup, if they press enter, get the results
	$("input[type=text]").keyup( function( e ){
		if ( e.keyCode === 13 ) {
			get_colors();
		}
	});


	// show/hide more info section on click
	$(".more-info").click(function(){
		$(".more").slideToggle( 700 );
	});


	// include the clipboard library so we can copy converted values to the clipboard and use them elsewhere.
	new ClipboardJS('.clipboard');


	// use the magnific popup
	$( '.lightbox-ajax' ).magnificPopup({
		type: 'inline'
	});

});

