
<?php
/**
 * The searchform.php template
 *
 * @package Biodelle
 */
?>

<form role="search" method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label for="search-input">
		<span class="screen-reader-text"><?php echo esc_html_x( 'Buscar por:', 'label', 'biodelle' ); ?></span>
	</label>
	<input type="search" id="search-input" class="search-field" placeholder="<?php echo esc_attr_x( 'Buscar...', 'placeholder', 'biodelle' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
	<button type="submit" class="search-submit">
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
			<circle cx="11" cy="11" r="8"></circle>
			<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
		</svg>
		<span class="screen-reader-text"><?php echo esc_html_x( 'Buscar', 'submit button', 'biodelle' ); ?></span>
	</button>
</form>
