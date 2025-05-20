
<?php
/**
 * The template for displaying search results pages
 *
 * @package Biodelle
 */

get_header();
?>

<main id="primary" class="site-main">
    <section class="search-header">
        <div class="container">
            <h1 class="search-title">
                <?php
                /* translators: %s: search query. */
                printf( esc_html__( 'Resultados da pesquisa para: %s', 'biodelle' ), '<span>' . get_search_query() . '</span>' );
                ?>
            </h1>
        </div>
    </section>

    <section class="search-results">
        <div class="container">
            <?php if ( have_posts() ) : ?>
                <div class="blog-grid">
                    <?php
                    /* Start the Loop */
                    while ( have_posts() ) :
                        the_post();
                        
                        $categories = get_the_category();
                        $category_name = !empty($categories) ? esc_html($categories[0]->name) : '';
                    ?>
                        <article class="blog-card">
                            <div class="blog-image">
                                <?php 
                                if (has_post_thumbnail()) :
                                    the_post_thumbnail('medium');
                                endif;
                                ?>
                            </div>
                            <div class="blog-content">
                                <span class="blog-category"><?php echo $category_name; ?></span>
                                <h3 class="blog-title"><?php the_title(); ?></h3>
                                <div class="blog-excerpt"><?php the_excerpt(); ?></div>
                                <a href="<?php the_permalink(); ?>" class="blog-link">
                                    Ler Artigo
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    <?php
                    endwhile;
                    
                    the_posts_navigation();
                    ?>
                </div>
            <?php
            else :
            ?>
                <p>Desculpe, mas nada corresponde aos seus termos de pesquisa. Por favor, tente novamente com algumas palavras-chave diferentes.</p>
                <?php
                get_search_form();
            endif;
            ?>
        </div>
    </section>
</main><!-- #main -->

<?php
get_footer();
