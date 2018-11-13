<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_available_block_formats() {
	return array(
		"h2-h6",
		"address",
		"pre",
		"bullist",
		"numlist",
		"dl",
		"bquote",
		"details",
		"table",
		"codesample",
		"tbreak"
	);
}

function rpc_tinymce_block_labels() {
	return array(
		"Headings",
		"Address",
		"Preformatted",
		"Unordered List",
		"Ordered List",
		"Description List",
		"Blockquote",
		"Details",
		"Table",
		"Code Sample",
		"Thematic Break"
	);
}

function rpc_tinymce_available_inline_formats() {
	return array(
		"link",
		"anchor",
		"br",
		"q",
		"cite",
		"dfn",
		"strong",
		"em",
		"abbr",
		"time",
		"del",
		"ins",
		"mark",
		"samp",
		"kbd",
		"var",
		"meter",
		"progress"
	);
}

function rpc_tinymce_inline_labels() {
	return array(
		"Link",
		"Anchor",
		"Line Break",
		"Inline Quotation",
		"Citation",
		"Definition",
		"Strong",
		"Emphasis",
		"Abbreviation",
		"Time",
		"Deletion",
		"Insertion",
		"Mark",
		"Sample Output",
		"Keyboard Input",
		"Variable",
		"Meter",
		"Progress"
	);
}

function rpc_tinymce_available_classes() {
	return array(
		"class-button",
		"class-clear",
		"class-2col",
		"class-3col",
		"class-4col"
	);
}

function rpc_tinymce_class_labels() {
	return array(
		".button",
		".clear",
		".list-2-col",
		".list-3-col",
		".list-4-col"
	);
}

function rpc_tinymce_available_tools() {
	return array(
		"pastetext",
		"undo-redo",
		"removeformat",
		"charmap"
	);
}

function rpc_tinymce_tool_labels() {
	return array(
		"Paste as Plain Text",
		"Undo and Redo",
		"Clear Formatting",
		"Special Characters"
	);
}

function rpc_tinymce_requires_shortcode() {
	$uses_shortcode = array( "dl", "bquote", "details", "meter" );
	return $uses_shortcode;
}

function rpc_tinymce_all_available_options() {
	$block = rpc_tinymce_available_block_formats();
	$inline = rpc_tinymce_available_inline_formats();
	$classes = rpc_tinymce_available_classes();
	$tools = rpc_tinymce_available_tools();
	$all = array_merge( $block, $inline, $tools );
	return $all;
}

function rpc_tinymce_default_options() {

	$options = rpc_tinymce_all_available_options();
	$exceptions = array("codesample", "samp", "kbd", "var", "meter", "progress" );
	
	$options = array_diff($options, $exceptions);
	$defaults = array_fill_keys($options, true);

	return $defaults;

}