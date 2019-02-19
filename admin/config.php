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

	$style_formats = array();

	if ( rpc_tinymce_check_settings( "class-button" ) == true ) {
		array_push( $style_formats, array(
			"title" => "Anchors: Button",
			"selector" => "a",
			"classes" => "button"
		) );
	}

	if ( rpc_tinymce_check_settings( "class-clear" ) == true ) {
		array_push( $style_formats, array(
			"title" => "Blocks: Clear",
			"selector" => "p, h1, h2, h3, h4, h5, h6, pre, blockquote",
			"classes" => "clear"
		) );
	}

	if ( rpc_tinymce_check_settings( "class-2col" ) == true ) {
		array_push( $style_formats, array(
			"title" => "Lists: 2 Column",
			"selector" => "ol, ul",
			"classes" => "list-2-col"
		) );
	}

	if ( rpc_tinymce_check_settings( "class-3col" ) == true ) {
		array_push( $style_formats, array(
			"title" => "Lists: 3 Column",
			"selector" => "ol, ul",
			"classes" => "list-3-col"
		) );
	}

	if ( rpc_tinymce_check_settings( "class-4col" ) == true ) {
		array_push( $style_formats, array(
			"title" => "Lists: 4 Column",
			"selector" => "ol, ul",
			"classes" => "list-4-col"
		) );
	}

	if ( function_exists( "get_field" ) ) {
        $prefix = "rpc_tinymce_editor_acf_class_";
        $enable = get_field( "{$prefix}enable", "option" );
        if ( $enable ) {
            for ( $s = 1; $s <= 5; $s++ ) {
                $style = get_field( "{$prefix}{$s}", "option" );
                if ( $style ) {
                	$classes = $style["classes"];
                    $classes = rpc_tinymce_acf_validate_classes( $classes );
                    $label = sanitize_text_field( $style["label"]);
                    if ( $classes && $label ) {
                        $custom_style_format = array(
                            "title" => $label,
                            "classes" => $classes,
                            "selector" => "",
                            "inline" => "",
                            "block" => "",
                            "exact" => false,
                            "wrapper" => false,
                            "remove" => "all"
                        );

                        $selectors = rpc_tinymce_acf_validate_selectors( $style["selectors"] );
                        $inline = rpc_tinymce_acf_validate_wrappers( "inline", $style["inline"] );
                        $block = rpc_tinymce_acf_validate_wrappers( "block", $style["block"] );
                        $exact = $style["exact"];
                        $wrapper = $style["wrapper"];

                        if ( !empty( $selectors ) ) {
                        	$custom_style_format["selector"] = $selectors;
                        }

                        if ( $inline ) {
                        	$custom_style_format["inline"] = $inline;
                        }

                        if ( $block ) {
                        	$custom_style_format["block"] = $block;
                        }

                        if ( $exact ) {
                        	$custom_style_format["exact"] = true;
                        }

                        if ( $exact ) {
                        	$custom_style_format["wrapper"] = true;
                        }

                        array_push( $style_formats, $custom_style_format );
                    } else {
                    	break;
                    }
                }
            }
        }
    }

	$init["block_formats"] = $block_formats;
	$init["indent"] = true;
	$init["invalid_styles"] = json_encode( array( "table" => "width height", "th" => "width height", "td" => "width height" ) );
	$init["noneditable_editable_class"] = "edit";
	$init["noneditable_noneditable_class"] = "no-edit";
	$init["object_resizing"] = false;
	$init["style_formats"] = json_encode( $style_formats );
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