<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_enable_shortcodes() {
	$shortcodes = rpc_tinymce_requires_shortcode();
	$enabled_shortcodes = array();

	foreach ( $shortcodes as $sc ) {
		if ( rpc_tinymce_check_settings( $sc ) ) {
			require_once plugin_dir_path( __FILE__ ) . $sc . ".php";
			array_push( $enabled_shortcodes, $sc );
		}
	}
}

rpc_tinymce_enable_shortcodes();