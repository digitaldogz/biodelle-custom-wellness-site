
<?php
/**
 * The template for displaying all pages
 *
 * @package Biodelle
 */

get_header();
?>

<main id="primary" class="site-main">
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="page-container">
            <header class="page-header">
                <h1 class="page-title"><?php the_title(); ?></h1>
            </header>

            <div class="page-content">
                <?php the_content(); ?>
            </div>
        </div>
    </article>
</main><!-- #main -->

<?php
get_footer();
