

// require all conversion functions
var cvert = require( "colorvert" );


// cmyk endpoint handler
module.exports = function( req, res ){

	// parse the URL for a format request
	var url_parts = req.url.substring( 1 ).split( "/" );
		format = url_parts[0],
		l = parseFloat( url_parts[1] ),
		a = parseFloat( url_parts[2] ),
		b = parseFloat( url_parts[3] );
	

	if( l && a && b ) {

		// convert to rgb using transicc
		cvert.lab_to_all( l, a, b, function( response ){

			// log the conversion
			console.log( "Converted lab( "+l+", "+a+", "+b+" )." );

			// send the response to the browser
			res.send( JSON.stringify( response, null, 4 ) );

		});

	} else {

		// send the response to the browser
		res.send( "Invalid input" );

	}

};

