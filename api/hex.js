

// require all conversion functions
var cvert = require( "colorvert" );


// cmyk endpoint handler
module.exports = function( req, res ){

	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		hex = url_parts[1];


	if( hex ) {

		// convert to rgb using transicc
		cvert.hex_to_all( hex, function( response ){

			console.log( "Converted Hex: "+hex+"." );

			// send the response to the browser
			res.send( JSON.stringify( response, null, 4 ) );

		});

	} else {

		// send the response to the browser
		res.send( "Invalid input" );

	}

};

