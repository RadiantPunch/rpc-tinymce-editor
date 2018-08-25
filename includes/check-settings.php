<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function rpc_tinymce_check_settings($format) {
	$value = false;
	$options = get_option( 'rpc_tinymce_options', rpc_tinymce_default_options() );

	if ( isset($options[$format]) && ! empty( $options[$format] ) ) {
		$value = (bool) $options[$format];
	}

	if ( $value ) {
		return true;
	}

	return false;
}

function rpc_tinymce_check_enabled( $array ) {
	
	$enabled = array();

	foreach ( $array as $val ) {
		if ( rpc_tinymce_check_settings( $val ) ) {
			array_push( $enabled, $val );
		}
	}
	
	return $enabled;

}