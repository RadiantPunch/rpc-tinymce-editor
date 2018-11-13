<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_block_callback() {	
	echo "<p>", esc_html__( "Select block element options", "rpc_tinymce" ), "</p>";
}

function rpc_tinymce_inline_callback() {
	echo "<p>", esc_html__( "Select inline element options", "rpc_tinymce" ), "</p>";
}

function rpc_tinymce_classes_callback() {
	echo "<p>", esc_html__( "Select class options", "rpc_tinymce" ), "</p>";
}

function rpc_tinymce_tools_callback() {
	echo "<p>", esc_html__( "Select editor tools", "rpc_tinymce" ), "</p>";
}

function rpc_tinymce_callback_field_checkbox( $args ) {
	$options = get_option( "rpc_tinymce_options", rpc_tinymce_default_options() );
	
	$id    = isset( $args["id"] )    ? $args["id"]    : "";
	$checked = isset( $options[$id] ) ? checked( $options[$id], 1, false ) : "";
	
	echo "<input id=\"rpc_tinymce_{$id}\" name=\"rpc_tinymce_options[{$id}]\" type=\"checkbox\" value=\"1\"{$checked}> ";
}