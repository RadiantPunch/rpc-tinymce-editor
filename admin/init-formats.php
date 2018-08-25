<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function rpc_tinymce_init_formats() {

	if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
		return;
	}

	if ( get_user_option( 'rich_editing') !== 'true' ) {
		return;
	}

	add_filter( 'tiny_mce_before_init', 'rpc_tinymce_tinymce_before_init' );
	add_filter( 'mce_buttons', 'rpc_tinymce_mce_buttons_1' );
	add_filter( 'mce_buttons_2', 'rpc_tinymce_mce_buttons_2' );

	function rpc_tinymce_external_plugins( $plugin_array ) {

		$all = rpc_tinymce_all_available_options();
		$wp_included = array_merge( array('h2-h6', 'address', 'pre', 'bullist', 'numlist', 'link' ), rpc_tinymce_available_tools() );
		$tinymce_added = array( 'table', 'codesample', 'anchor' );
		$uses_shortcode = rpc_tinymce_requires_shortcode();
		$custom_plugins = array_diff( $all, $wp_included, $tinymce_added );
		$shortcode_enabled = array();

		foreach ( $custom_plugins as $plugin ) {
			if ( rpc_tinymce_check_settings($plugin) ) {
				$plugin_array[ 'rpc_tinymce_' . $plugin ] = plugin_dir_url( __FILE__ ) . 'plugins/' . $plugin . '/' . $plugin . '.js';
			}
		}

		foreach ( $tinymce_added as $plugin ) {
			if ( rpc_tinymce_check_settings($plugin) ) {
				$plugin_array[ $plugin ] = plugin_dir_url( __FILE__ ) . 'plugins/' . $plugin . '/plugin.min.js';
			}
		}

		foreach ( $uses_shortcode as $plugin ) {
			if ( rpc_tinymce_check_settings($plugin) ) {
				array_push( $shortcode_enabled, $plugin );
			}
		}
	
		if ( !empty( $shortcode_enabled ) ) {
			$plugin_array[ 'scode-key-disable' ] = plugin_dir_url( __FILE__ ) . 'plugins/scode-key-disable/scode-key-disable.js';
			$plugin_array[ 'noneditable' ] = plugin_dir_url( __FILE__ ) . 'plugins/noneditable/plugin.min.js';
		}

		$plugin_array[ 'wptadv' ] = plugin_dir_url( __FILE__ ) . 'plugins/wptadv/plugin.js';

		return $plugin_array;

	}
	add_filter( 'mce_external_plugins', 'rpc_tinymce_external_plugins' );

}