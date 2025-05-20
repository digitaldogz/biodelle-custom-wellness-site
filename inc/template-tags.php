
<?php
/**
 * Custom template tags for this theme
 *
 * @package Biodelle
 */

if ( ! function_exists( 'biodelle_posted_on' ) ) :
	/**
	 * Prints HTML with meta information for the current post-date/time.
	 */
	function biodelle_posted_on() {
		$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';
		if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
			$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
		}

		$time_string = sprintf(
			$time_string,
			esc_attr( get_the_date( DATE_W3C ) ),
			esc_html( get_the_date() ),
			esc_attr( get_the_modified_date( DATE_W3C ) ),
			esc_html( get_the_modified_date() )
		);

		printf(
			'<span class="posted-on">%1$s</span>',
			'<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . $time_string . '</a>'
		);
	}
endif;

if ( ! function_exists( 'biodelle_posted_by' ) ) :
	/**
	 * Prints HTML with meta information for the current author.
	 */
	function biodelle_posted_by() {
		printf(
			'<span class="byline">%1$s</span>',
			'<span class="author vcard"><a class="url fn n" href="' . esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ) . '">' . esc_html( get_the_author() ) . '</a></span>'
		);
	}
endif;

if ( ! function_exists( 'biodelle_entry_footer' ) ) :
	/**
	 * Prints HTML with meta information for the categories, tags and comments.
	 */
	function biodelle_entry_footer() {
		// Hide category and tag text for pages.
		if ( 'post' === get_post_type() ) {
			$categories_list = get_the_category_list( esc_html__( ', ', 'biodelle' ) );
			if ( $categories_list ) {
				printf( '<span class="cat-links">%1$s %2$s</span>', esc_html__( 'Categorias:', 'biodelle' ), $categories_list );
			}

			$tags_list = get_the_tag_list( '', esc_html__( ', ', 'biodelle' ) );
			if ( $tags_list ) {
				printf( '<span class="tags-links">%1$s %2$s</span>', esc_html__( 'Tags:', 'biodelle' ), $tags_list );
			}
		}

		if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
			echo '<span class="comments-link">';
			comments_popup_link(
				sprintf(
					wp_kses(
						/* translators: %s: post title */
						__( 'Comentar em <span class="screen-reader-text">%s</span>', 'biodelle' ),
						array(
							'span' => array(
								'class' => array(),
							),
						)
					),
					wp_kses_post( get_the_title() )
				)
			);
			echo '</span>';
		}

		edit_post_link(
			sprintf(
				wp_kses(
					/* translators: %s: Name of current post. */
					__( 'Editar <span class="screen-reader-text">%s</span>', 'biodelle' ),
					array(
						'span' => array(
							'class' => array(),
						),
					)
				),
				wp_kses_post( get_the_title() )
			),
			'<span class="edit-link">',
			'</span>'
		);
	}
endif;

if ( ! function_exists( 'biodelle_post_thumbnail' ) ) :
	/**
	 * Displays an optional post thumbnail.
	 */
	function biodelle_post_thumbnail() {
		if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
			return;
		}

		if ( is_singular() ) :
			?>

			<div class="post-thumbnail">
				<?php the_post_thumbnail(); ?>
			</div><!-- .post-thumbnail -->

		<?php else : ?>

			<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
				<?php
					the_post_thumbnail(
						'post-thumbnail',
						array(
							'alt' => the_title_attribute(
								array(
									'echo' => false,
								)
							),
						)
					);
				?>
			</a>

			<?php
		endif; // End is_singular().
	}
endif;
