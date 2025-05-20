
<?php
/**
 * The header for our theme
 *
 * @package Biodelle
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/garet" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/madebyfabian/garet-typeface@1.0.0/stylesheet.css">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'biodelle' ); ?></a>

    <header id="masthead" class="site-header">
        <div class="header-container">
            <div class="site-branding">
                <?php
                if ( has_custom_logo() ) :
                    the_custom_logo();
                else :
                ?>
                    <h1 class="site-logo"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><span class="terracotta">B</span><span class="moss">iodelle</span></a></h1>
                <?php endif; ?>
            </div><!-- .site-branding -->

            <nav id="site-navigation" class="main-navigation">
                <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'primary',
                        'menu_id'        => 'primary-menu',
                    )
                );
                ?>
            </nav><!-- #site-navigation -->

            <button id="mobile-menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                <span class="screen-reader-text"><?php esc_html_e( 'Menu', 'biodelle' ); ?></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
            </button>
        </div>
    </header><!-- #masthead -->

    <div id="mobile-menu" class="mobile-menu">
        <?php
        wp_nav_menu(
            array(
                'theme_location' => 'primary',
                'menu_id'        => 'mobile-menu-list',
            )
        );
        ?>
    </div>
