<?php
/*
Plugin Name:  RPC TinyMCE Editor
Plugin URI:   https://radiantpunch.com/
Description:  Customizes the default TinyMCE editor to encourage best practices for creating web content.
Version:      1.1
Author:       Radiant Punch Creative
Author URI:   https://wordpress.org/
License:      GNU General Public License
License URI:  https://www.gnu.org/licenses/gpl-3.0.en.html
Text Domain:  rpc_tinymce
Domain Path:  /lang
 */

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

if ( is_admin() ) {

	require_once plugin_dir_path( __FILE__ ) . "admin/menu.php";
	require_once plugin_dir_path( __FILE__ ) . "admin/config.php";
	require_once plugin_dir_path( __FILE__ ) . "admin/init-formats.php";
	require_once plugin_dir_path( __FILE__ ) . "admin/buttons.php";
	require_once plugin_dir_path( __FILE__ ) . "admin/buttons-2.php";
	require_once plugin_dir_path( __FILE__ ) . "admin/settings/settings-page.php";
	require_once plugin_dir_path( __FILE__ ) . "admin/settings/register.php";
	require_once plugin_dir_path( __FILE__ ) . "admin/settings/callbacks.php";
	require_once plugin_dir_path( __FILE__ ) . "admin/settings/validate.php";

	add_action( "init", "rpc_tinymce_init_formats" );
	add_action( "admin_enqueue_scripts", "rpc_tinymce_options_page_css" );
	add_filter( "mce_css", "rpc_tinymce_shortcodes_style" );
	add_action( "admin_init", "rpc_tinymce_acf_integration" );
}

add_action( "plugins_loaded", "rpc_tinymce_textdomain" );

if ( ! is_admin() ) {
	require_once plugin_dir_path( __FILE__ ) . "public/responsive-table.php";
}

require_once plugin_dir_path( __FILE__ ) . "options.php";
require_once plugin_dir_path( __FILE__ ) . "includes/check-settings.php";
require_once plugin_dir_path( __FILE__ ) . "includes/shortcodes.php";

function rpc_tinymce_shortcodes_style( $css ) {

	$shortcodes = rpc_tinymce_requires_shortcode();
	$enabled = rpc_tinymce_check_enabled( $shortcodes );
	
	if ( !empty( $enabled ) ) {
		if ( ! empty( $css ) )
		$css .= ",";
		$css .= plugins_url( "admin/css/rpc-tinymce.css", __FILE__ );
		return $css;
	}

}

function rpc_tinymce_options_page_css( $hook ) {

    $current_screen = get_current_screen();

    if ( strpos( $current_screen->base, "rpc-editor" ) ) {
        wp_register_style( "rpc-editor-settings", plugins_url( "admin/css/settings.css", __FILE__ ) );
        wp_enqueue_style( "rpc-editor-settings" );
    }
}

function rpc_tinymce_acf_integration() {
	if ( is_plugin_active( "advanced-custom-fields/acf.php" ) ) {
	
		require_once plugin_dir_path( __FILE__ ) . "admin/settings/acf-settings.php";

		function rpc_tinymce_acf_form() {
			do_action('acf/input/admin_head');
	    	do_action('acf/input/admin_enqueue_scripts');
	    	do_action('acf/input/admin_enqueue_styles');
		}

		function rpc_tinymce_add_acf_variables() {
		    acf_form_head();
		}

		function rpc_tinymce_acf_style() {
			$current_screen = get_current_screen();

		    if ( strpos( $current_screen->base, "rpc-editor" ) ) {
		        wp_register_style( "rpc_tinymce_acf", plugins_url( "admin/css/acf.css", __FILE__ ), false, "1.0" );
		    	wp_enqueue_style( "rpc_tinymce_acf" );
		    }
		}

		add_action( "acf/input/admin_enqueue_scripts", "rpc_tinymce_acf_style" );
		add_action( "admin_init", "rpc_tinymce_add_acf_variables" );
	}
}

function rpc_tinymce_textdomain() {
	load_plugin_textdomain( "rpc_tinymce", false, plugin_dir_path( __FILE__ ) . "lang/" );
}