<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_register_settings() {
	
	register_setting( 
		"rpc_tinymce_options", 
		"rpc_tinymce_options", 
		"rpc_tinymce_validate_options" 
	);
	
	add_settings_section( 
		"rpc_tinymce_block_section", 
		esc_html__( "Block Formats", "rpc_tinymce" ),
		"rpc_tinymce_block_callback", 
		"rpc-editor"
	);
	
	add_settings_section( 
		"rpc_tinymce_inline_section", 
		esc_html__( "Inline Formats", "rpc_tinymce" ), 
		"rpc_tinymce_inline_callback", 
		"rpc-editor"
	);

	add_settings_section( 
		"rpc_tinymce_classes_section", 
		esc_html__( "Classes", "rpc_tinymce" ),
		"rpc_tinymce_classes_callback", 
		"rpc-editor"
	);

	add_settings_section( 
		"rpc_tinymce_tools_section", 
		esc_html__( "Tools", "rpc_tinymce" ),
		"rpc_tinymce_tools_callback", 
		"rpc-editor"
	);

	$block_options = rpc_tinymce_available_block_formats();
	$block_labels = rpc_tinymce_block_labels();
	$inline_options = rpc_tinymce_available_inline_formats();
	$inline_labels = rpc_tinymce_inline_labels();
	$class_options = rpc_tinymce_available_classes();
	$class_labels = rpc_tinymce_class_labels();
	$tool_options = rpc_tinymce_available_tools();
	$tool_labels = rpc_tinymce_tool_labels();

	function rpc_tinymce_format_fields( $id, $label, $section_type ) {
		add_settings_field(
			$id,
			esc_html__( $label, "rpc_tinymce" ),
			"rpc_tinymce_callback_field_checkbox",
			"rpc-editor",
			"rpc_tinymce_" . $section_type . "_section",
			[ "id" => $id ]
		);
	}

	foreach ( $block_options as $index => $option ) {
		rpc_tinymce_format_fields( $option, $block_labels[$index], "block" );
	}

	foreach ( $inline_options as $index => $option ) {
		rpc_tinymce_format_fields( $option, $inline_labels[$index], "inline" );
	}

	foreach ( $class_options as $index => $option ) {
		rpc_tinymce_format_fields( $option, $class_labels[$index], "classes" );
	}

	foreach ( $tool_options as $index => $option ) {
		rpc_tinymce_format_fields( $option, $tool_labels[$index], "tools" );
	}

}

add_action( "admin_init", "rpc_tinymce_register_settings" );