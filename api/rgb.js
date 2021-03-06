

// require all conversion functions
var cvert = require( "colorvert" );


// cmyk endpoint handler
module.exports = function( req, res ){

	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		format = url_parts[0],
		r = url_parts[1],
		g = url_parts[2],
		b = url_parts[3];
	

	// validate input
	if ( isNaN( r ) || isNaN( g ) || isNaN( b ) ) {

		// log the error
		console.log( "Invalid Input: rgb( "+r+", "+g+", "+b+" )" );

		// send the response to the browser
		res.send( "Invalid input" );
		return;

	}
	

	// convert to lab using transicc
	cvert.rgb_to_all( r, g, b, function( err, response ){

		if ( err ) {

			// send error response
			res.send( err );

		} else {

			// log the conversion
			console.log( "Converted rgb( "+r+", "+g+", "+b+" )." );

			// send the response to the browser
			res.send( JSON.stringify( response, null, 4 ) );

		}

	});

};

