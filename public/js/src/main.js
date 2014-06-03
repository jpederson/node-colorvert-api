

$(function(){
	
	var get_part_value = function( part ) {
		return $( "#"+part ).val();
	},

	get_colors = function(){

		// get the selected color space
		var space = $("#space").val(),
			endpoint;

		switch ( space ) {

			case "cmyk":
				endpoint = "/cmyk/" + get_part_value( "cmyk-c" ) +
					"/" + get_part_value( "cmyk-m" ) +
					"/" + get_part_value( "cmyk-y" ) +
					"/" + get_part_value( "cmyk-k" );
			break;

			case "hex":
				endpoint = "/hex/" + get_part_value( "hex" );
			break;

			case "hsl":
				endpoint = "/hsl/" + get_part_value( "hsl-h" ) +
					"/" + get_part_value( "hsl-s" ) +
					"/" + get_part_value( "hsl-l" );
			break;

			case "hsv":
				endpoint = "/hsv/" + get_part_value( "hsv-h" ) +
					"/" + get_part_value( "hsv-s" ) +
					"/" + get_part_value( "hsv-v" );
			break;

			case "lab":
				endpoint = "/lab/" + get_part_value( "lab-l" ) +
					"/" + get_part_value( "lab-a" ) +
					"/" + get_part_value( "lab-b" );
			break;

			case "rgb":
				endpoint = "/rgb/" + get_part_value( "rgb-r" ) +
					"/" + get_part_value( "rgb-g" ) +
					"/" + get_part_value( "rgb-b" );
			break;

			case "xyz":
				endpoint = "/xyz/" + get_part_value( "xyz-x" ) +
					"/" + get_part_value( "xyz-y" ) +
					"/" + get_part_value( "xyz-z" );
			break;

		}

		$.getJSON( endpoint, function( response ){

			// set it into the response div
			$(".response").html( "<pre>" + JSON.stringify( response, null, 3 ) + "</pre>" );

			// set colors on body text and background.
			$("body").css( "background-color", response.hex ).css( "color", response.hex_readable );
		
		});

	};

	$("#space").change(function(){

		// hide visible fieldsets
		$("fieldset.visible").removeClass( "visible" );

		// show the one they chose
		$("fieldset").filter("."+$(this).val()).addClass( "visible" );

	});

	$("#convert").click( get_colors );

	$("input[type=text]").keyup( function( e ){
		if ( e.keyCode === 13 ) {
			get_colors();
		}
	});

});

