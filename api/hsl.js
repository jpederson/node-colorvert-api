

// require all conversion functions
var cvert = require( "colorvert" );


// cmyk endpoint handler
module.exports = function( req, res ){

	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		format = url_parts[0],
		h = url_parts[1],
		s = url_parts[2],
		l = url_parts[3];
	

	// validate input
	if ( isNaN( h ) || isNaN( s ) || isNaN( l ) ) {

		// log the error
		console.log( "Invalid Input: hsl( "+h+", "+s+", "+l+" )" );

		// send the response to the browser
		res.send( "Invalid input" );
		return;

	}

	// convert to lab using transicc
	cvert.hsl_to_all( h, s, l, function( err, response ){

		if ( err ) {

			// send the error response
			res.send( err );

		} else {

			// log the conversion
			console.log( "Converted hsl( "+h+", "+s+", "+l+" )." );

			// send the response to the browser
			res.send( JSON.stringify( response, null, 4 ) );

		}

	});


};
