

// require all conversion functions
var cvert = require( "colorvert" );


// cmyk endpoint handler
module.exports = function( req, res ){
		
	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		format = url_parts[0],
		h = parseFloat( url_parts[1] ),
		s = parseFloat( url_parts[2] ),
		v = parseFloat( url_parts[3] );
	

	// validate input.
	if ( isNaN( h ) || isNaN( s ) || isNaN( v ) ) {

		// send the response to the browser
		res.send( "Invalid input" );
		return;

	}


	// convert to Lab using transicc
	cvert.hsv_to_all( h, s, v, function( err, response ){

		if ( err ) {

			// send error response
			res.send( err );

		} else {

			// log the conversion
			console.log( "Converted hsv( "+h+", "+s+", "+v+" )." );

			// send the response to the browser
			res.send( response );

		}

	});

};

