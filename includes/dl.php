<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// ----- REGISTER SHORTCODES -----
add_shortcode( 'dlist', 'rpc_tinymce_dl_shortcode' );
add_shortcode( 'dterm', 'rpc_tinymce_dt_shortcode');
add_shortcode( 'ddescription', 'rpc_tinymce_dd_shortcode' );

// ----- RENDER SHORTCODES -----

// Description list
function rpc_tinymce_dl_shortcode( $atts, $content = null ) {
	return '<dl>' . do_shortcode($content) . '</dl>';
}

// Description List Term
function rpc_tinymce_dt_shortcode( $atts, $content = null ) {
	return '<dt>' . do_shortcode($content) . '</dt>';
}

// Description List Description
function rpc_tinymce_dd_shortcode( $atts, $content = null ) {
	return '<dd>' . do_shortcode($content) . '</dd>';
}

// ----- ALLOW NESTED SHORTCODES -----
add_filter( 'no_texturize_shortcodes', 'rpc_tinymce_no_texturize_dl_shortcode' );

function rpc_tinymce_no_texturize_dl_shortcode($shortcodes) {
	$shortcodes[] = 'rpc_tinymce_dl_shortcode';
	return $shortcodes;
}

// ----- CLEAN SHORTCODES -----
add_filter( 'the_content', 'rpc_tinymce_clean_dlist_content' );

function rpc_tinymce_clean_dlist_content( $content ) {
	$array = array(
		'<div class="no-edit dlist">' => '',
		'<p class="br-only edit dterm">' => '',
		'<p class="br-only edit ddescription">' => '',
    );
    return strtr( $content, $array );
}

?>