<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_validate_options( $checkboxes ) {
	foreach ( $checkboxes as &$input ) {
		if ( ! isset( $checkboxes[$input] ) ) {
			$checkboxes[$input] = null;
		}
		$checkboxes[$input] = ($checkboxes[$input] == 1 ? 1 : 0);
	}
	return $checkboxes;
}

function rpc_tinymce_acf_validate_classes( $classes ) {
	if ( empty( $classes ) ) {
		return "";
	}

	$classes = explode( " ", $classes );
	$validated_classes = array();
	
	foreach ( $classes as &$cls ) {
		
		$cls = sanitize_html_class( $cls );
		array_push( $validated_classes, $cls );

	}

	return implode( " ", $validated_classes );
}

function rpc_tinymce_acf_validate_selectors( $selectors ) {

	$valid = array( 
		"p",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"address",
		"pre",
		"ul",
		"ol",
		"li",
		"dl",
		"dt",
		"dd",
		"blockquote",
		"details",
		"summary",
		"hr",
		"a",
		"q",
		"dfn",
		"cite",
		"strong",
		"em",
		"abbr",
		"time",
		"del",
		"ins",
		"mark",
		"code",
		"samp",
		"kbd",
		"var",
		"meter",
		"progress",
	);

	$validated_array = array_intersect( $valid, $selectors );

	return implode( ", ", $validated_array );

}

function rpc_tinymce_acf_validate_wrappers( $type, $input ) {

	$valid = array();
	$valid_output = "";

	if ( $type === "inline" ) {
		$valid = array(
			"none",
			"a",
			"q",
			"dfn",
			"cite",
			"strong",
			"em",
			"abbr",
			"time",
			"del",
			"ins",
			"mark",
			"code",
			"samp",
			"kbd",
			"var",
		);
	} else if ( $type === "block" ) {
		$valid = array(
			"none",
			"p",
			"h2",
			"h3",
			"h4",
			"h5",
			"h6",
			"address",
			"pre",
			"blockquote",
		);
	}

	if ( in_array( $input, $valid ) ) {
		$valid_output = $input;
	}

	return $valid_output;

}