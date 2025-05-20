
<?php
/**
 * The template for displaying the footer
 *
 * @package Biodelle
 */
?>

    <footer id="colophon" class="site-footer">
        <div class="footer-container">
            <div class="footer-column">
                <h1 class="footer-logo"><span class="terracotta">B</span><span class="moss">iodelle</span></h1>
                <p class="footer-description">Dermocosméticos e suplementos criados sob medida para seus objetivos, com a pureza e precisão que você merece.</p>
                <div class="social-links">
                    <a href="#" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                    <a href="#" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </a>
                    <a href="#" aria-label="WhatsApp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                    </a>
                </div>
            </div>
            
            <div class="footer-column">
                <h2 class="footer-heading">Produtos</h2>
                <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'footer-1',
                        'menu_class'     => 'footer-links',
                        'fallback_cb'    => false,
                    )
                );
                ?>
            </div>
            
            <div class="footer-column">
                <h2 class="footer-heading">Empresa</h2>
                <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'footer-2',
                        'menu_class'     => 'footer-links',
                        'fallback_cb'    => false,
                    )
                );
                ?>
            </div>
            
            <div class="footer-column">
                <h2 class="footer-heading">Contato</h2>
                <?php
                wp_nav_menu(
                    array(
                        'theme_location' => 'footer-3',
                        'menu_class'     => 'footer-links',
                        'fallback_cb'    => false,
                    )
                );
                ?>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; <?php echo date('Y'); ?> Biodelle. Todos os direitos reservados.</p>
        </div>
    </footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>
</body>
</html>
