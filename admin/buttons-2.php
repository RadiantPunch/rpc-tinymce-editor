<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_mce_buttons_2($buttons) {

	$remove_defaults = array(
		"strikethrough",
		"hr",
		"forecolor",
		"outdent",
		"indent",
		"wp_help",
		"pastetext",
		"removeformat",
		"charmap",
		"undo",
		"redo"
	);
	foreach ( $buttons as $button_key => $button_value ) {
		if ( in_array( $button_value, $remove_defaults ) ) {
			unset( $buttons[ $button_key ] );
		}
	}

	$available_inline_formats = rpc_tinymce_available_inline_formats();
	$available_classes = rpc_tinymce_available_classes();
	$enabled_formats = array();

	foreach ( $available_classes as $class ) {
		if ( rpc_tinymce_check_settings( $class ) ) {
			array_push( $enabled_formats, 'styleselect' );
			break;
		}
	}

	foreach ( $available_inline_formats as $format ) {
		if ( rpc_tinymce_check_settings( $format ) ) {
			array_push( $enabled_formats, $format );
		}
	}

	if ( rpc_tinymce_check_settings( "link" ) ) {
		array_splice( $enabled_formats, 1, 0, array("unlink") );
	}

	$buttons = array_merge( $buttons, $enabled_formats );
	return $buttons;
}