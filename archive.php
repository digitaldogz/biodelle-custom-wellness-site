
<?php
/**
 * The template for displaying archive pages
 *
 * @package Biodelle
 */

get_header();
?>

<main id="primary" class="site-main">
    <section class="blog-archive-header">
        <div class="container">
            <h1 class="archive-title"><?php the_archive_title(); ?></h1>
            <?php the_archive_description( '<div class="archive-description">', '</div>' ); ?>
        </div>
    </section>

    <section class="blog-archive-content">
        <div class="container">
            <div class="blog-grid">
                <?php
                if ( have_posts() ) :
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
                    
                else :
                    ?>
                    <p>Nenhum conteúdo encontrado.</p>
                    <?php
                endif;
                ?>
            </div>
        </div>
    </section>
    
    <section class="contact-section">
        <div class="section-container">
            <div class="contact-card">
                <h2>Entre em Contato</h2>
                <p>Tem dúvidas sobre nossos produtos ou gostaria de receber uma consulta personalizada? Converse conosco pelo WhatsApp.</p>
                
                <form id="whatsapp-form" class="whatsapp-form">
                    <div class="form-group">
                        <label for="name">Seu Nome</label>
                        <input type="text" id="name" name="name" placeholder="Nome completo" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="whatsapp">Seu WhatsApp</label>
                        <input type="tel" id="whatsapp" name="whatsapp" placeholder="(00) 00000-0000" required>
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
