
<?php
/**
 * Biodelle Theme functions and definitions
 *
 * @package Biodelle
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Define constants
define( 'BIODELLE_THEME_VERSION', '1.0.0' );
define( 'BIODELLE_THEME_DIR', trailingslashit( get_template_directory() ) );
define( 'BIODELLE_THEME_URI', trailingslashit( get_template_directory_uri() ) );

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function biodelle_setup() {
    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support( 'post-thumbnails' );

    // Register navigation menus
    register_nav_menus(
        array(
            'primary' => esc_html__( 'Primary Menu', 'biodelle' ),
            'footer-1' => esc_html__( 'Footer Menu 1', 'biodelle' ),
            'footer-2' => esc_html__( 'Footer Menu 2', 'biodelle' ),
            'footer-3' => esc_html__( 'Footer Menu 3', 'biodelle' ),
        )
    );

    // Switch default core markup for search form, comment form, and comments to output valid HTML5.
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );

    // Set up the WordPress core custom background feature.
    add_theme_support(
        'custom-background',
        apply_filters(
            'biodelle_custom_background_args',
            array(
                'default-color' => 'ffffff',
                'default-image' => '',
            )
        )
    );

    // Add support for core custom logo.
    add_theme_support(
        'custom-logo',
        array(
            'height'      => 80,
            'width'       => 200,
            'flex-width'  => true,
            'flex-height' => true,
        )
    );

    // Add theme support for selective refresh for widgets.
    add_theme_support( 'customize-selective-refresh-widgets' );

    // Add support for full and wide align images.
    add_theme_support( 'align-wide' );

    // Add support for editor styles.
    add_theme_support( 'editor-styles' );

    // Add support for block templates.
    add_theme_support( 'block-templates' );
}
add_action( 'after_setup_theme', 'biodelle_setup' );

/**
 * Enqueue scripts and styles.
 */
function biodelle_scripts() {
    wp_enqueue_style( 'biodelle-style', get_stylesheet_uri(), array(), BIODELLE_THEME_VERSION );
    
    // Enqueue theme script
    wp_enqueue_script( 'biodelle-script', get_template_directory_uri() . '/assets/js/scripts.js', array('jquery'), BIODELLE_THEME_VERSION, true );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'biodelle_scripts' );

/**
 * Register widget area.
 */
function biodelle_widgets_init() {
    register_sidebar(
        array(
            'name'          => esc_html__( 'Sidebar', 'biodelle' ),
            'id'            => 'sidebar-1',
            'description'   => esc_html__( 'Add widgets here.', 'biodelle' ),
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        )
    );
}
add_action( 'widgets_init', 'biodelle_widgets_init' );

/**
 * Custom template tags for this theme.
 */
require BIODELLE_THEME_DIR . 'inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require BIODELLE_THEME_DIR . 'inc/template-functions.php';

/**
 * Customizer additions.
 */
require BIODELLE_THEME_DIR . 'inc/customizer.php';
