<?php

// ----- REGISTER SHORTCODES -----
add_shortcode( 'blockquote', 'rpc_tinymce_bquote_shortcode' );

// ----- RENDER SHORTCODES -----
function rpc_tinymce_bquote_shortcode( $atts, $content, $tag ) {
	extract(shortcode_atts(array(
    	'type' => '',
    	'author' => '',
    	'work' => '',
    	'url' => '',
    	'title' => '',
    	'company' => ''
	), $atts));

	$author_set = '';
	$work_set = '';
	$url_set = '';
	$title_set = '';
	$company_set = '';
	$credentials_set = '';

	$blockquoteAuthorError = '<p class="shortcode-error"><strong>Error:</strong> Blockquote shortcodes require an author.</p>';

	if ( $type == 'regular' ) {

		if ( !empty($author) ) {
			$author_set = '— <span class="quote-author">' . $author . '</span>';
		} else {
			return $blockquoteAuthorError;
		}

		if ( !empty($work) ) {
			if ( !empty($url) ) { 
				$work_set = ', <cite><a href="' . $url . '" target="_blank" rel="noopener">' . $work . '</a></cite>';
			} else {
				$work_set = ', <cite>' . $work . '</cite>';
			}
		}

		if ( !empty($url) ) {
			$url_set = ' cite="' . $url . '"';
		}

		$output = '<blockquote class="regular-blockquote"' . $url_set . '><div class="quote-body">' . $content . '</div><footer>' . $author_set . $work_set . '</footer>' . '</blockquote>';
		return $output;

	} elseif ( $type == 'testimonial' ) {

		if ( !empty($author) ) {
			$author_set = '— <span class="quote-author">' . $author . '</span>';
		} else {
			return $blockquoteAuthorError;
		}

		if ( !empty($title) ) {
			$title_set = '<span class="author-title">' . $title . '</span>';
		}

		if ( !empty($company) ) {
			if ( !empty($url) ) {
				$company_set = '<span class="author-company"><a href="' . $url . '" target="_blank" rel="noopener">' . $company . '</a></span>';
			} else {
				$company_set = '<span class="author-company">' . $company . '</span>';
			}
		}

		if ( !empty($title) && !empty($company) ) {
			$credentials_set = $title_set . ', ' . $company_set;
		} elseif ( !empty($title) ) {
			$credentials_set = $title_set;
		} elseif ( !empty($company) ) {
			$credentials_set = $company_set;
		} else {
			return '<p class="shortcode-error"><strong>Error:</strong> Blockquote testimonial shortcodes require at least a company <em>OR</em> a title.</p>';
		}

		$output = '<blockquote class="testimonial"><div class="quote-body">' . $content . '</div><footer>' . $author_set . '<div class="credentials">' . $credentials_set . '</div></footer>' . '</blockquote>';
		return $output;

	} else {
		return '<p class="shortcode-error"><strong>Error:</strong> The blockquote shortcode must have an assigned type of regular or testimonial.</p>';
	}
}

?>