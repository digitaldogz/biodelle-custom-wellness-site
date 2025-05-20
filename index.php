
<?php
/**
 * The main template file
 *
 * @package Biodelle
 */

get_header();
?>

<main id="primary" class="site-main">
    <section class="hero-section">
        <div class="hero-container">
            <div class="hero-content">
                <h1 class="hero-heading">
                    Sua Beleza e Saúde, <span style="color: var(--biodelle-terracotta);">ÚNICAS</span>. 
                    <br>
                    Nossas Fórmulas, <span style="color: var(--biodelle-moss);">Também</span>.
                </h1>
                <p class="hero-text">
                    Descubra dermocosméticos e suplementos criados sob medida para seus objetivos, 
                    com a pureza e precisão que você merece.
                </p>
                <div class="buttons-container">
                    <a href="#about" class="biodelle-btn-outline">Conheça a Biodelle</a>
                </div>
                <div class="quality-badge">
                    <span>Qualidade Farmacêutica Comprovada</span>
                </div>
            </div>
            
            <div class="hero-image">
                <!-- Placeholder for hero image -->
                <div class="image-placeholder"></div>
            </div>
        </div>
    </section>

    <section id="differentials" class="section section-white">
        <div class="section-container">
            <h2 class="section-heading">O Cuidado que Transforma. A Precisão que Você Confia.</h2>
            <p class="section-subtitle">
                Descubra o que torna a Biodelle única e como nosso compromisso com a excelência
                se traduz em cada fórmula personalizada.
            </p>
            
            <div class="cards-grid">
                <?php
                $differentials = array(
                    array(
                        'icon' => 'person',
                        'title' => 'Consultoria Farmacêutica',
                        'description' => 'Fernanda e Roberto dedicam seu conhecimento para co-criar sua fórmula ideal, entendendo suas necessidades individuais.'
                    ),
                    array(
                        'icon' => 'leaf',
                        'title' => 'Opções Veganas e Hipoalergênicas',
                        'description' => 'Desenvolvemos fórmulas com ativos puros, livres de componentes indesejados, respeitando seu corpo e suas escolhas.'
                    ),
                    array(
                        'icon' => 'package',
                        'title' => 'Embalagens Premium e Sustentáveis',
                        'description' => 'Apresentação sofisticada que preserva a integridade da sua fórmula, com atenção à sustentabilidade.'
                    ),
                    array(
                        'icon' => 'flask',
                        'title' => 'Precisão em Cada Gota',
                        'description' => 'Laboratório moderno e processos rigorosos garantem a dosagem exata e a máxima eficácia dos seus manipulados.'
                    )
                );
                
                foreach ($differentials as $differential) :
                ?>
                <div class="biodelle-card">
                    <div style="height:2px;background:linear-gradient(to right, var(--biodelle-terracotta), var(--biodelle-moss))"></div>
                    <div style="padding:32px;">
                        <div class="card-icon">
                            <!-- Icon would go here, using WordPress dashicons or custom SVG -->
                            <?php if ($differential['icon'] == 'person') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--biodelle-terracotta)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2v6"></path><circle cx="12" cy="11" r="3"></circle><path d="M12 14c-3.86 0-7 3.14-7 7h14c0-3.86-3.14-7-7-7z"></path>
                            </svg>
                            <?php elseif ($differential['icon'] == 'leaf') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--biodelle-moss)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"></path><path d="M5 19.5C5.5 18 6 15 6 12c0-6 4-10 10-10"></path><path d="M12 19c3.5 0 7-2 9-5"></path>
                            </svg>
                            <?php elseif ($differential['icon'] == 'package') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--biodelle-terracotta)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M12 3v6"></path>
                            </svg>
                            <?php elseif ($differential['icon'] == 'flask') : ?>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--biodelle-moss)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6 6 0 1 1-4 0"></path>
                            </svg>
                            <?php endif; ?>
                        </div>
                        <h3 style="font-size:20px;margin-top:20px;margin-bottom:10px;"><?php echo esc_html($differential['title']); ?></h3>
                        <p style="color:rgba(51,51,51,0.7);"><?php echo esc_html($differential['description']); ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <section id="solutions" class="section">
        <div class="section-container">
            <h2 class="section-heading">Nossas Linhas de Manipulados</h2>
            <p class="section-subtitle">
                Conheça nossas principais linhas de manipulados e descubra como cada uma pode ser
                personalizada para atender às suas necessidades específicas.
            </p>
            
            <!-- Solutions Content -->
        </div>
    </section>

    <section id="about" class="section section-white">
        <div class="section-container">
            <h2 class="section-heading">Sobre a Biodelle</h2>
            <p class="section-subtitle">
                Conheça nossa história, valores e compromisso com a excelência
                em manipulação farmacêutica para saúde e beleza.
            </p>
            
            <!-- About Content -->
        </div>
    </section>

    <section id="blog" class="section">
        <div class="section-container">
            <h2 class="section-heading">Blog Biodelle</h2>
            <p class="section-subtitle">
                Conteúdos exclusivos sobre saúde, beleza e bem-estar para 
                apoiar sua jornada de autocuidado.
            </p>
            
            <div class="blog-grid">
                <?php
                $args = array(
                    'post_type'      => 'post',
                    'posts_per_page' => 3,
                );
                $query = new WP_Query( $args );
                
                if ( $query->have_posts() ) :
                    while ( $query->have_posts() ) :
                        $query->the_post();
                        
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
                    wp_reset_postdata();
                else :
                ?>
                    <p>Nenhum post encontrado.</p>
                <?php endif; ?>
            </div>
            
            <div style="text-align:center;margin-top:40px;">
                <a href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>" class="biodelle-btn-outline">Ver Todos os Artigos</a>
            </div>
        </div>
    </section>
</main><!-- #main -->

<?php
get_footer();
