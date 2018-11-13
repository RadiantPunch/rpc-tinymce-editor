<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_tinymce_before_init($init) {
	$block_formats = "Paragraph=p;";

	if ( rpc_tinymce_check_settings("h2-h6") == true ) {
		$block_formats .= "Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;";
	}

	if ( rpc_tinymce_check_settings("address") == true ) {
		$block_formats .= "Address=address;";
	}

	if ( rpc_tinymce_check_settings("pre") == true ) {
		$block_formats .= "Preformatted=pre;";
	}

	$init["block_formats"] = $block_formats;
	$init["indent"] = true;
	$init["invalid_styles"] = json_encode( array( "table" => "width height", "th" => "width height", "td" => "width height" ) );
	$init["noneditable_editable_class"] = "edit";
	$init["noneditable_noneditable_class"] = "no-edit";
	$init["object_resizing"] = false;
	$init["table_advtab"] = false;
	$init["table_cell_advtab"] = false;
	$init["table_class_list"] = json_encode( array( ["title" => "None", "value" => ""], ["title" => "Responsive", "value" => "responsive-table"] ) );
	$init["table_default_attributes"] = json_encode( array( "border" => "" ) );
	$init["table_default_styles"] = json_encode( array( "width" => "", "height" => "" ) );
	$init["table_responsive_width"] = true;
	$init["table_row_advtab"] = false;
	$init["table_toolbar"] = "";
	$init["tadv_noautop"] = true;
	$init["wordpress_adv_hidden"] = false;
	$init["wpautop"] = false;
	return $init;
}