
<?php
/**
 * Biodelle Theme Customizer
 *
 * @package Biodelle
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function biodelle_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial(
			'blogname',
			array(
				'selector'        => '.site-logo',
				'render_callback' => 'biodelle_customize_partial_blogname',
			)
		);
		$wp_customize->selective_refresh->add_partial(
			'blogdescription',
			array(
				'selector'        => '.site-description',
				'render_callback' => 'biodelle_customize_partial_blogdescription',
			)
		);
	}
	
	// Contact Information Section
	$wp_customize->add_section( 'biodelle_contact_section', array(
		'title'       => esc_html__( 'Informações de Contato', 'biodelle' ),
		'priority'    => 130,
		'description' => esc_html__( 'Configure informações de contato para o tema.', 'biodelle' ),
	) );
	
	// WhatsApp Number
	$wp_customize->add_setting( 'biodelle_whatsapp_number', array(
		'default'           => '5500000000000',
		'sanitize_callback' => 'sanitize_text_field',
	) );
	
	$wp_customize->add_control( 'biodelle_whatsapp_number', array(
		'label'       => esc_html__( 'Número do WhatsApp', 'biodelle' ),
		'description' => esc_html__( 'Adicione o número no formato internacional sem espaços ou caracteres especiais (ex: 5511999999999)', 'biodelle' ),
		'section'     => 'biodelle_contact_section',
		'type'        => 'text',
	) );
	
	// Email
	$wp_customize->add_setting( 'biodelle_email', array(
		'default'           => 'contato@biodelle.com',
		'sanitize_callback' => 'sanitize_email',
	) );
	
	$wp_customize->add_control( 'biodelle_email', array(
		'label'   => esc_html__( 'Email', 'biodelle' ),
		'section' => 'biodelle_contact_section',
		'type'    => 'email',
	) );
	
	// Social Media Section
	$wp_customize->add_section( 'biodelle_social_section', array(
		'title'       => esc_html__( 'Redes Sociais', 'biodelle' ),
		'priority'    => 140,
		'description' => esc_html__( 'Configure os links das redes sociais.', 'biodelle' ),
	) );
	
	// Instagram
	$wp_customize->add_setting( 'biodelle_instagram', array(
		'default'           => '',
		'sanitize_callback' => 'esc_url_raw',
	) );
	
	$wp_customize->add_control( 'biodelle_instagram', array(
		'label'   => esc_html__( 'Instagram', 'biodelle' ),
		'section' => 'biodelle_social_section',
		'type'    => 'url',
	) );
	
	// Facebook
	$wp_customize->add_setting( 'biodelle_facebook', array(
		'default'           => '',
		'sanitize_callback' => 'esc_url_raw',
	) );
	
	$wp_customize->add_control( 'biodelle_facebook', array(
		'label'   => esc_html__( 'Facebook', 'biodelle' ),
		'section' => 'biodelle_social_section',
		'type'    => 'url',
	) );
	
	// Colors Section
	$wp_customize->add_setting( 'biodelle_terracotta_color', array(
		'default'           => '#AB7E79',
		'sanitize_callback' => 'sanitize_hex_color',
	) );
	
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'biodelle_terracotta_color', array(
		'label'   => esc_html__( 'Cor Terracotta', 'biodelle' ),
		'section' => 'colors',
	) ) );
	
	$wp_customize->add_setting( 'biodelle_moss_color', array(
		'default'           => '#65684E',
		'sanitize_callback' => 'sanitize_hex_color',
	) );
	
	$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'biodelle_moss_color', array(
		'label'   => esc_html__( 'Cor Moss', 'biodelle' ),
		'section' => 'colors',
	) ) );
}
add_action( 'customize_register', 'biodelle_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function biodelle_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function biodelle_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function biodelle_customize_preview_js() {
	wp_enqueue_script( 'biodelle-customizer', get_template_directory_uri() . '/assets/js/customizer.js', array( 'customize-preview' ), BIODELLE_THEME_VERSION, true );
}
add_action( 'customize_preview_init', 'biodelle_customize_preview_js' );

/**
 * Output generated CSS to head based on Customizer settings
 */
function biodelle_customizer_css() {
    $terracotta_color = get_theme_mod( 'biodelle_terracotta_color', '#AB7E79' );
    $moss_color = get_theme_mod( 'biodelle_moss_color', '#65684E' );
    
    ?>
    <style type="text/css">
        :root {
            --biodelle-terracotta: <?php echo sanitize_hex_color($terracotta_color); ?>;
            --biodelle-moss: <?php echo sanitize_hex_color($moss_color); ?>;
        }
    </style>
    <?php
}
add_action( 'wp_head', 'biodelle_customizer_css' );
