

// require all conversion functions
var cvert = require( "colorvert" );


// cmyk endpoint handler
module.exports = function( req, res ){

	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		hex = url_parts[1];


	if ( !hex.length ) {
		// send the response to the browser
		res.send( "Invalid Hex value specified." );
	}

	// convert to rgb using transicc
	cvert.hex_to_all( hex, function( err, response ){

		if ( err ) {

			// respond with the error
			res.send( err );

		} else {

			// log the conversion
			console.log( "Successful Conversion: hex( #"+hex+" )." );

			// send the response to the browser
			res.send( JSON.stringify( response, null, 4 ) );

		}

	});

};

