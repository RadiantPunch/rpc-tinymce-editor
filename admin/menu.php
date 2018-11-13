<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_submenu() {
	
	add_submenu_page(
		"options-general.php",
		esc_html__( "RPC Editor Settings", "rpc_tinymce" ),
		esc_html__( "RPC Editor Settings", "rpc_tinymce" ),
		"manage_options",
		"rpc-editor",
		"rpc_tinymce_settings_page"
	);
	
}

add_action( "admin_menu", "rpc_tinymce_submenu" );