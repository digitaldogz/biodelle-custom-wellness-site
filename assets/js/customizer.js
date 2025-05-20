
/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {
	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-logo a' ).text( to );
		} );
	} );

	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Color updates in real time
	wp.customize( 'biodelle_terracotta_color', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style.setProperty('--biodelle-terracotta', to );
		} );
	} );
	
	wp.customize( 'biodelle_moss_color', function( value ) {
		value.bind( function( to ) {
			document.documentElement.style.setProperty('--biodelle-moss', to );
		} );
	} );
} )( jQuery );
