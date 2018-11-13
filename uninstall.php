<?php

if ( ! defined( "WP_UNINSTALL_PLUGIN" ) ) {
	exit;
}

delete_option( "rpc_tinymce_options" );