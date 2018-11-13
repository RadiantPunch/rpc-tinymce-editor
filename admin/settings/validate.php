<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_validate_options($checkboxes) {
	foreach ( $checkboxes as &$input ) {
		if ( ! isset( $checkboxes[$input] ) ) {
			$checkboxes[$input] = null;
		}
		$checkboxes[$input] = ($checkboxes[$input] == 1 ? 1 : 0);
	}
	return $checkboxes;
}