
<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Biodelle
 */

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function biodelle_pingback_header() {
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'biodelle_pingback_header' );

/**
 * Add custom classes to the body element.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function biodelle_body_classes( $classes ) {
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	// Adds a class of no-sidebar when there is no sidebar present.
	if ( ! is_active_sidebar( 'sidebar-1' ) ) {
		$classes[] = 'no-sidebar';
	}

	return $classes;
}
add_filter( 'body_class', 'biodelle_body_classes' );

/**
 * Modify archive titles
 */
function biodelle_archive_title( $title ) {
    if ( is_category() ) {
        $title = single_cat_title( '', false );
    } elseif ( is_tag() ) {
        $title = single_tag_title( '', false );
    } elseif ( is_author() ) {
        $title = get_the_author();
    } elseif ( is_post_type_archive() ) {
        $title = post_type_archive_title( '', false );
    } elseif ( is_tax() ) {
        $title = single_term_title( '', false );
    }

    return $title;
}
add_filter( 'get_the_archive_title', 'biodelle_archive_title' );

/**
 * Customize excerpt length
 */
function biodelle_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'biodelle_excerpt_length' );

/**
 * Customize excerpt more string
 */
function biodelle_excerpt_more( $more ) {
    return '...';
}
add_filter( 'excerpt_more', 'biodelle_excerpt_more' );
