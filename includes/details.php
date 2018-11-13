<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

// ----- REGISTER SHORTCODES -----
add_shortcode("details", "rpc_tinymce_details_shortcode");
add_shortcode("dsummary", "rpc_tinymce_dsummary_shortcode");

// ----- RENDER SHORTCODES -----
function rpc_tinymce_details_shortcode( $atts, $content = null ){
	return "<details>" . do_shortcode($content) . "</details>";
}

function rpc_tinymce_dsummary_shortcode( $atts, $content = null ){
	return "<summary>" . do_shortcode($content) . "</summary>";
}

// ----- ALLOW NESTED SHORTCODES -----
add_filter( "no_texturize_shortcodes", "rpc_tinymce_no_texturize_details_shortcode" );

function rpc_tinymce_no_texturize_details_shortcode($shortcodes) {
	$shortcodes[] = "rpc_editor_details_shortcode";
	return $shortcodes;
}