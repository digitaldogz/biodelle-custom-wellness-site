
<?php
/**
 * The template for displaying all single posts
 *
 * @package Biodelle
 */

get_header();
?>

<main id="primary" class="site-main">
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="single-post-container">
            <header class="post-header">
                <div class="post-categories">
                    <?php
                    $categories = get_the_category();
                    if (!empty($categories)) {
                        echo '<span class="blog-category">' . esc_html($categories[0]->name) . '</span>';
                    }
                    ?>
                </div>
                
                <h1 class="post-title"><?php the_title(); ?></h1>
                
                <div class="post-meta">
                    <span class="post-date"><?php echo get_the_date(); ?></span>
                    <span class="post-author"><?php the_author(); ?></span>
                </div>
            </header>

            <?php if ( has_post_thumbnail() ) : ?>
            <div class="post-featured-image">
                <?php the_post_thumbnail('large'); ?>
            </div>
            <?php endif; ?>

            <div class="post-content blog-content">
                <?php the_content(); ?>
            </div>

            <div class="post-navigation">
                <?php
                the_post_navigation(
                    array(
                        'prev_text' => '<span class="nav-subtitle">' . esc_html__( 'Anterior:', 'biodelle' ) . '</span> <span class="nav-title">%title</span>',
                        'next_text' => '<span class="nav-subtitle">' . esc_html__( 'Próximo:', 'biodelle' ) . '</span> <span class="nav-title">%title</span>',
                    )
                );
                ?>
            </div>

            <?php
            // If comments are open or we have at least one comment, load up the comment template.
            if ( comments_open() || get_comments_number() ) :
                comments_template();
            endif;
            ?>
        </div>
    </article>
    
    <section class="related-posts">
        <div class="section-container">
            <h2 class="section-heading">Outros Artigos</h2>
            
            <div class="blog-grid">
                <?php
                // Get current post categories
                $categories = get_the_category();
                $category_ids = array();
                foreach ( $categories as $category ) {
                    $category_ids[] = $category->term_id;
                }
                
                // Query related posts
                $args = array(
                    'post_type'      => 'post',
                    'posts_per_page' => 3,
                    'post__not_in'   => array( get_the_ID() ),
                    'category__in'   => $category_ids,
                );
                
                $related_query = new WP_Query( $args );
                
                if ( $related_query->have_posts() ) :
                    while ( $related_query->have_posts() ) :
                        $related_query->the_post();
                        
                        $rel_categories = get_the_category();
                        $rel_category_name = !empty($rel_categories) ? esc_html($rel_categories[0]->name) : '';
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
                            <span class="blog-category"><?php echo $rel_category_name; ?></span>
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
                    wp_reset_postdata();
                else :
                ?>
                    <p>Nenhum post relacionado encontrado.</p>
                <?php endif; ?>
            </div>
        </div>
    </section>
    
    <section class="contact-section">
        <div class="section-container">
            <div class="contact-card">
                <h2>Quer Saber Mais?</h2>
                <p>Converse com nossos especialistas e descubra como podemos ajudar você a alcançar seus objetivos de saúde e beleza.</p>
                
                <form id="whatsapp-form" class="whatsapp-form">
                    <div class="form-group">
                        <label for="name">Seu Nome</label>
                        <input type="text" id="name" name="name" placeholder="Nome completo" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Mensagem</label>
                        <textarea id="message" name="message" rows="4" placeholder="Como podemos ajudar você?" required></textarea>
                    </div>
                    
                    <button type="submit" class="biodelle-btn-primary whatsapp-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        Iniciar Conversa pelo WhatsApp
                    </button>
                </form>
            </div>
        </div>
    </section>
</main><!-- #main -->

<?php
get_footer();
