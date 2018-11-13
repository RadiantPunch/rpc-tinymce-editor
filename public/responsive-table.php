<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_responsive_table_scripts() {
	$query = get_post(get_the_ID()); 
	$content = apply_filters("the_content", $query->post_content);
	$table = "<table ";
	$table_class = "responsive-table";
	if ( (strpos( $content, $table ) !== false) && (strpos( $content, $table_class ) !== false) ) {
		wp_enqueue_script( "responsive-table", plugin_dir_url( __FILE__ ) . "js/responsive-table.js", array("jquery"), null, true );
		wp_enqueue_style( "responsive-table", plugin_dir_url( __FILE__ ) . "css/responsive-table.css" );
	}
}

add_action( "wp_enqueue_scripts", "rpc_tinymce_responsive_table_scripts" );