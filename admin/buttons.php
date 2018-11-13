<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_mce_buttons_1($buttons) {

	$remove_defaults = array(
		"bold",
		"italic",
		"link",
		"bullist",
		"numlist",
		"blockquote",
		"alignleft",
		"aligncenter",
		"alignright",
		"wp_more",
		"wp_adv",
	);
	foreach ( $buttons as $button_key => $button_value ) {
		if ( in_array( $button_value, $remove_defaults ) ) {
			unset( $buttons[ $button_key ] );
		}
	}

	$available_block = rpc_tinymce_available_block_formats();
	$available_tools = rpc_tinymce_available_tools();
	$available_block_tools = array_merge( $available_block, $available_tools );
	
	$enabled_block_tools = array();

	foreach ( $available_block_tools as $bt ) {
		if ( rpc_tinymce_check_settings( $bt ) ) {
			array_push( $enabled_block_tools, $bt );
		}
	}

	if ( rpc_tinymce_check_settings("undo-redo") ) {
		array_push( $enabled_block_tools, "undo", "redo" );
	}

	$buttons = array_merge( $buttons, $enabled_block_tools );
	return $buttons;
}