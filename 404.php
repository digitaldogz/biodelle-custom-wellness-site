
<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package Biodelle
 */

get_header();
?>

<main id="primary" class="site-main">
    <section class="error-404 not-found">
        <div class="page-container">
            <header class="page-header">
                <h1 class="page-title">Oops! Esta página não foi encontrada.</h1>
            </header><!-- .page-header -->

            <div class="page-content">
                <p>Parece que nada foi encontrado neste local. Talvez tente um dos links abaixo ou uma pesquisa?</p>

                <?php get_search_form(); ?>

                <div class="widgets-404">
                    <div class="widget-404">
                        <h2>Posts Recentes</h2>
                        <ul>
                            <?php
                            wp_get_archives( array(
                                'type'  => 'postbypost',
                                'limit' => 5,
                            ) );
                            ?>
                        </ul>
                    </div>

                    <div class="widget-404">
                        <h2>Categorias</h2>
                        <ul>
                            <?php
                            wp_list_categories( array(
                                'title_li' => '',
                            ) );
                            ?>
                        </ul>
                    </div>
                </div>

                <div class="back-home">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="biodelle-btn-primary">Voltar para a página inicial</a>
                </div>
            </div><!-- .page-content -->
        </div>
    </section><!-- .error-404 -->
</main><!-- #main -->

<?php
get_footer();
