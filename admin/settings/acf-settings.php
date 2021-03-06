<?php

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

if( function_exists("acf_add_local_field_group") ) {

	acf_add_local_field_group(array(
		"key" => "group_5bec7aa807e6e",
		"title" => "Custom Editor Classes",
		"fields" => array(
			array(
				"key" => "field_5bec7ba16df01",
				"label" => "Enable Custom Classes?",
				"name" => "rpc_tinymce_editor_acf_class_enable",
				"type" => "true_false",
				"instructions" => "Create your own classes to apply to content in the editor.",
				"required" => 0,
				"conditional_logic" => 0,
				"wrapper" => array(
					"width" => "",
					"class" => "",
					"id" => "",
				),
				"message" => "",
				"default_value" => 0,
				"ui" => 1,
				"ui_on_text" => "",
				"ui_off_text" => "",
			),
			array(
				"key" => "field_5bec7ac06deff",
				"label" => "Custom Class One",
				"name" => "rpc_tinymce_editor_acf_class_1",
				"type" => "group",
				"instructions" => "Add a custom class to the editor‘s format dropdown.",
				"required" => 0,
				"conditional_logic" => array(
					array(
						array(
							"field" => "field_5bec7ba16df01",
							"operator" => "==",
							"value" => "1",
						),
					),
				),
				"wrapper" => array(
					"width" => "",
					"class" => "class-group",
					"id" => "",
				),
				"layout" => "block",
				"sub_fields" => array(
					array(
						"key" => "field_5bec7c1a6df02",
						"label" => "Class(es)",
						"name" => "classes",
						"type" => "text",
						"instructions" => "Add the css class name. Multiple names are okay — separate with a space.",
						"required" => 0,
						"conditional_logic" => 0,
						"wrapper" => array(
							"width" => "",
							"class" => "one-half",
							"id" => "",
						),
						"default_value" => "",
						"placeholder" => "",
						"prepend" => "",
						"append" => "",
						"maxlength" => 50,
					),
					array(
						"key" => "field_5bec7b6c6df00",
						"label" => "Label",
						"name" => "label",
						"type" => "text",
						"instructions" => "Label for the class that will appear in the formats dropdown",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5bec7c1a6df02",
									"operator" => "!=empty",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half",
							"id" => "",
						),
						"default_value" => "",
						"placeholder" => "",
						"prepend" => "",
						"append" => "",
						"maxlength" => 30,
					),
					array(
						"key" => "field_5bec7e446df04",
						"label" => "Selector(s)",
						"name" => "selectors",
						"type" => "checkbox",
						"instructions" => "Choose all selectors that can have this class",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5bec7c1a6df02",
									"operator" => "!=empty",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "full-width list-6col",
							"id" => "",
						),
						"choices" => array(
							"p" => "p",
							"h2" => "h2",
							"h3" => "h3",
							"h4" => "h4",
							"h5" => "h5",
							"h6" => "h6",
							"address" => "address",
							"pre" => "pre",
							"ul" => "ul",
							"ol" => "ol",
							"li" => "li",
							"dl" => "dl",
							"dt" => "dt",
							"dd" => "dd",
							"blockquote" => "blockquote",
							"details" => "details",
							"summary" => "summary",
							"hr" => "hr",
							"a" => "a",
							"q" => "q",
							"dfn" => "dfn",
							"cite" => "cite",
							"strong" => "strong",
							"em" => "em",
							"abbr" => "abbr",
							"time" => "time",
							"del" => "del",
							"ins" => "ins",
							"mark" => "mark",
							"code" => "code",
							"samp" => "samp",
							"kbd" => "kbd",
							"var" => "var",
							"meter" => "meter",
							"progress" => "progress",
						),
						"allow_custom" => 0,
						"default_value" => array(
						),
						"layout" => "",
						"toggle" => 0,
						"return_format" => "",
						"save_custom" => 0,
					),
					array(
						"key" => "field_5bec81876df05",
						"label" => "Inline Wrapper",
						"name" => "inline",
						"type" => "radio",
						"instructions" => "Optionally select an inline element to apply to the existing selection",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5bec7c1a6df02",
									"operator" => "!=empty",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half list-4col",
							"id" => "",
						),
						"choices" => array(
							"none" => "None",
							"a" => "a",
							"q" => "q",
							"dfn" => "dfn",
							"cite" => "cite",
							"strong" => "strong",
							"em" => "em",
							"abbr" => "abbr",
							"time" => "time",
							"del" => "del",
							"ins" => "ins",
							"mark" => "mark",
							"code" => "code",
							"samp" => "samp",
							"kbd" => "kbd",
							"var" => "var",
						),
						"allow_null" => 0,
						"other_choice" => 0,
						"default_value" => "none",
						"layout" => "",
						"return_format" => "",
						"save_other_choice" => 0,
					),
					array(
						"key" => "field_5bec82726df06",
						"label" => "Block Wrapper",
						"name" => "block",
						"type" => "radio",
						"instructions" => "Optionally select a block element to apply to the existing selection",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5bec7c1a6df02",
									"operator" => "!=empty",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half list-3col",
							"id" => "",
						),
						"choices" => array(
							"none" => "None",
							"p" => "p",
							"h2" => "h2",
							"h3" => "h3",
							"h4" => "h4",
							"h5" => "h5",
							"h6" => "h6",
							"address" => "address",
							"pre" => "pre",
							"blockquote" => "blockquote",
						),
						"allow_null" => 0,
						"other_choice" => 0,
						"default_value" => "none",
						"layout" => "",
						"return_format" => "",
						"save_other_choice" => 0,
					),
					array(
						"key" => "field_5bec83a96df07",
						"label" => "Exact?",
						"name" => "exact",
						"type" => "true_false",
						"instructions" => "Disable merging of similar styles? This is needed for some CSS inheritance issues such as text-decoration for underline/strikethrough.",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5bec7c1a6df02",
									"operator" => "!=empty",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "two-thirds",
							"id" => "",
						),
						"message" => "",
						"default_value" => 0,
						"ui" => 1,
						"ui_on_text" => "",
						"ui_off_text" => "",
					),
					array(
						"key" => "field_5bec84af6df08",
						"label" => "Wrapper?",
						"name" => "wrapper",
						"type" => "true_false",
						"instructions" => "Should this class be a container for block elements?",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5bec7c1a6df02",
									"operator" => "!=empty",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-third",
							"id" => "",
						),
						"message" => "",
						"default_value" => 0,
						"ui" => 1,
						"ui_on_text" => "",
						"ui_off_text" => "",
					),
				),
			),
			array(
				"key" => "field_5c0826bc4d117",
				"label" => "Custom Class Two",
				"name" => "rpc_tinymce_editor_acf_class_2",
				"type" => "group",
				"instructions" => "Add a custom class to the editor‘s format dropdown.",
				"required" => 0,
				"conditional_logic" => array(
					array(
						array(
							"field" => "field_5bec7ba16df01",
							"operator" => "==",
							"value" => "1",
						),
						array(
							"field" => "field_5bec7c1a6df02",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5bec7b6c6df00",
							"operator" => "!=empty",
						),
					),
				),
				"wrapper" => array(
					"width" => "",
					"class" => "class-group",
					"id" => "",
				),
				"layout" => "block",
				"sub_fields" => array(
					array(
						"key" => "field_5c0826bc4d118",
						"label" => "Class(es)",
						"name" => "classes",
						"type" => "text",
						"instructions" => "Add the css class name. Multiple names are okay — separate with a space.",
						"required" => 0,
						"conditional_logic" => 0,
						"wrapper" => array(
							"width" => "",
							"class" => "one-half",
							"id" => "",
						),
						"default_value" => "",
						"placeholder" => "",
						"prepend" => "",
						"append" => "",
						"maxlength" => 50,
					),
					array(
						"key" => "field_5c0826bc4d119",
						"label" => "Label",
						"name" => "label",
						"type" => "text",
						"instructions" => "Label for the class that will appear in the formats dropdown",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826bc4d118",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half",
							"id" => "",
						),
						"default_value" => "",
						"placeholder" => "",
						"prepend" => "",
						"append" => "",
						"maxlength" => 30,
					),
					array(
						"key" => "field_5c0826bc4d11a",
						"label" => "Selector(s)",
						"name" => "selectors",
						"type" => "checkbox",
						"instructions" => "Choose all selectors that can have this class",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826bc4d118",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "full-width list-6col",
							"id" => "",
						),
						"choices" => array(
							"p" => "p",
							"h2" => "h2",
							"h3" => "h3",
							"h4" => "h4",
							"h5" => "h5",
							"h6" => "h6",
							"address" => "address",
							"pre" => "pre",
							"ul" => "ul",
							"ol" => "ol",
							"li" => "li",
							"dl" => "dl",
							"dt" => "dt",
							"dd" => "dd",
							"blockquote" => "blockquote",
							"details" => "details",
							"summary" => "summary",
							"hr" => "hr",
							"a" => "a",
							"q" => "q",
							"dfn" => "dfn",
							"cite" => "cite",
							"strong" => "strong",
							"em" => "em",
							"abbr" => "abbr",
							"time" => "time",
							"del" => "del",
							"ins" => "ins",
							"mark" => "mark",
							"code" => "code",
							"samp" => "samp",
							"kbd" => "kbd",
							"var" => "var",
							"meter" => "meter",
							"progress" => "progress",
						),
						"allow_custom" => 0,
						"save_custom" => 0,
						"default_value" => array(
						),
						"layout" => "",
						"toggle" => 0,
						"return_format" => "",
					),
					array(
						"key" => "field_5c0826bc4d11b",
						"label" => "Inline Wrapper",
						"name" => "inline",
						"type" => "radio",
						"instructions" => "Optionally select an inline element to apply to the existing selection",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826bc4d118",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half list-4col",
							"id" => "",
						),
						"choices" => array(
							"none" => "None",
							"a" => "a",
							"q" => "q",
							"dfn" => "dfn",
							"cite" => "cite",
							"strong" => "strong",
							"em" => "em",
							"abbr" => "abbr",
							"time" => "time",
							"del" => "del",
							"ins" => "ins",
							"mark" => "mark",
							"code" => "code",
							"samp" => "samp",
							"kbd" => "kbd",
							"var" => "var",
						),
						"allow_null" => 0,
						"other_choice" => 0,
						"save_other_choice" => 0,
						"default_value" => "none",
						"layout" => "",
						"return_format" => "",
					),
					array(
						"key" => "field_5c0826bc4d11c",
						"label" => "Block Wrapper",
						"name" => "block",
						"type" => "radio",
						"instructions" => "Optionally select a block element to apply to the existing selection",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826bc4d118",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half list-3col",
							"id" => "",
						),
						"choices" => array(
							"none" => "None",
							"p" => "p",
							"h2" => "h2",
							"h3" => "h3",
							"h4" => "h4",
							"h5" => "h5",
							"h6" => "h6",
							"address" => "address",
							"pre" => "pre",
							"blockquote" => "blockquote",
						),
						"allow_null" => 0,
						"other_choice" => 0,
						"save_other_choice" => 0,
						"default_value" => "none",
						"layout" => "",
						"return_format" => "",
					),
					array(
						"key" => "field_5c0826bc4d11d",
						"label" => "Exact?",
						"name" => "exact",
						"type" => "true_false",
						"instructions" => "Disable merging of similar styles? This is needed for some CSS inheritance issues such as text-decoration for underline/strikethrough.",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826bc4d118",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "two-thirds",
							"id" => "",
						),
						"message" => "",
						"default_value" => 0,
						"ui" => 1,
						"ui_on_text" => "",
						"ui_off_text" => "",
					),
					array(
						"key" => "field_5c0826bc4d11e",
						"label" => "Wrapper?",
						"name" => "wrapper",
						"type" => "true_false",
						"instructions" => "Should this class be a container for block elements?",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826bc4d118",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-third",
							"id" => "",
						),
						"message" => "",
						"default_value" => 0,
						"ui" => 1,
						"ui_on_text" => "",
						"ui_off_text" => "",
					),
				),
			),
			array(
				"key" => "field_5c0826d44d123",
				"label" => "Custom Class Three",
				"name" => "rpc_tinymce_editor_acf_class_3",
				"type" => "group",
				"instructions" => "Add a custom class to the editor‘s format dropdown.",
				"required" => 0,
				"conditional_logic" => array(
					array(
						array(
							"field" => "field_5bec7ba16df01",
							"operator" => "==",
							"value" => "1",
						),
						array(
							"field" => "field_5bec7c1a6df02",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5bec7b6c6df00",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5c0826bc4d118",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5c0826bc4d119",
							"operator" => "!=empty",
						),
					),
				),
				"wrapper" => array(
					"width" => "",
					"class" => "class-group",
					"id" => "",
				),
				"layout" => "block",
				"sub_fields" => array(
					array(
						"key" => "field_5c0826d44d124",
						"label" => "Class(es)",
						"name" => "classes",
						"type" => "text",
						"instructions" => "Add the css class name. Multiple names are okay — separate with a space.",
						"required" => 0,
						"conditional_logic" => 0,
						"wrapper" => array(
							"width" => "",
							"class" => "one-half",
							"id" => "",
						),
						"default_value" => "",
						"placeholder" => "",
						"prepend" => "",
						"append" => "",
						"maxlength" => 50,
					),
					array(
						"key" => "field_5c0826d44d125",
						"label" => "Label",
						"name" => "label",
						"type" => "text",
						"instructions" => "Label for the class that will appear in the formats dropdown",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826d44d124",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half",
							"id" => "",
						),
						"default_value" => "",
						"placeholder" => "",
						"prepend" => "",
						"append" => "",
						"maxlength" => 30,
					),
					array(
						"key" => "field_5c0826d44d126",
						"label" => "Selector(s)",
						"name" => "selectors",
						"type" => "checkbox",
						"instructions" => "Choose all selectors that can have this class",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826d44d124",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "full-width list-6col",
							"id" => "",
						),
						"choices" => array(
							"p" => "p",
							"h2" => "h2",
							"h3" => "h3",
							"h4" => "h4",
							"h5" => "h5",
							"h6" => "h6",
							"address" => "address",
							"pre" => "pre",
							"ul" => "ul",
							"ol" => "ol",
							"li" => "li",
							"dl" => "dl",
							"dt" => "dt",
							"dd" => "dd",
							"blockquote" => "blockquote",
							"details" => "details",
							"summary" => "summary",
							"hr" => "hr",
							"a" => "a",
							"q" => "q",
							"dfn" => "dfn",
							"cite" => "cite",
							"strong" => "strong",
							"em" => "em",
							"abbr" => "abbr",
							"time" => "time",
							"del" => "del",
							"ins" => "ins",
							"mark" => "mark",
							"code" => "code",
							"samp" => "samp",
							"kbd" => "kbd",
							"var" => "var",
							"meter" => "meter",
							"progress" => "progress",
						),
						"allow_custom" => 0,
						"save_custom" => 0,
						"default_value" => array(
						),
						"layout" => "",
						"toggle" => 0,
						"return_format" => "",
					),
					array(
						"key" => "field_5c0826d44d127",
						"label" => "Inline Wrapper",
						"name" => "inline",
						"type" => "radio",
						"instructions" => "Optionally select an inline element to apply to the existing selection",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826d44d124",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half list-4col",
							"id" => "",
						),
						"choices" => array(
							"none" => "None",
							"a" => "a",
							"q" => "q",
							"dfn" => "dfn",
							"cite" => "cite",
							"strong" => "strong",
							"em" => "em",
							"abbr" => "abbr",
							"time" => "time",
							"del" => "del",
							"ins" => "ins",
							"mark" => "mark",
							"code" => "code",
							"samp" => "samp",
							"kbd" => "kbd",
							"var" => "var",
						),
						"allow_null" => 0,
						"other_choice" => 0,
						"save_other_choice" => 0,
						"default_value" => "none",
						"layout" => "",
						"return_format" => "",
					),
					array(
						"key" => "field_5c0826d44d128",
						"label" => "Block Wrapper",
						"name" => "block",
						"type" => "radio",
						"instructions" => "Optionally select a block element to apply to the existing selection",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826d44d124",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half list-3col",
							"id" => "",
						),
						"choices" => array(
							"none" => "None",
							"p" => "p",
							"h2" => "h2",
							"h3" => "h3",
							"h4" => "h4",
							"h5" => "h5",
							"h6" => "h6",
							"address" => "address",
							"pre" => "pre",
							"blockquote" => "blockquote",
						),
						"allow_null" => 0,
						"other_choice" => 0,
						"save_other_choice" => 0,
						"default_value" => "none",
						"layout" => "",
						"return_format" => "",
					),
					array(
						"key" => "field_5c0826d44d129",
						"label" => "Exact?",
						"name" => "exact",
						"type" => "true_false",
						"instructions" => "Disable merging of similar styles? This is needed for some CSS inheritance issues such as text-decoration for underline/strikethrough.",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826d44d124",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "two-thirds",
							"id" => "",
						),
						"message" => "",
						"default_value" => 0,
						"ui" => 1,
						"ui_on_text" => "",
						"ui_off_text" => "",
					),
					array(
						"key" => "field_5c0826d44d12a",
						"label" => "Wrapper?",
						"name" => "wrapper",
						"type" => "true_false",
						"instructions" => "Should this class be a container for block elements?",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826d44d124",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-third",
							"id" => "",
						),
						"message" => "",
						"default_value" => 0,
						"ui" => 1,
						"ui_on_text" => "",
						"ui_off_text" => "",
					),
				),
			),
			array(
				"key" => "field_5c0826eb4d12f",
				"label" => "Custom Class Four",
				"name" => "rpc_tinymce_editor_acf_class_4",
				"type" => "group",
				"instructions" => "Add a custom class to the editor‘s format dropdown.",
				"required" => 0,
				"conditional_logic" => array(
					array(
						array(
							"field" => "field_5bec7ba16df01",
							"operator" => "==",
							"value" => "1",
						),
						array(
							"field" => "field_5bec7c1a6df02",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5bec7b6c6df00",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5c0826bc4d118",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5c0826bc4d119",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5c0826d44d124",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5c0826d44d125",
							"operator" => "!=empty",
						),
					),
				),
				"wrapper" => array(
					"width" => "",
					"class" => "class-group",
					"id" => "",
				),
				"layout" => "block",
				"sub_fields" => array(
					array(
						"key" => "field_5c0826ec4d130",
						"label" => "Class(es)",
						"name" => "classes",
						"type" => "text",
						"instructions" => "Add the css class name. Multiple names are okay — separate with a space.",
						"required" => 0,
						"conditional_logic" => 0,
						"wrapper" => array(
							"width" => "",
							"class" => "one-half",
							"id" => "",
						),
						"default_value" => "",
						"placeholder" => "",
						"prepend" => "",
						"append" => "",
						"maxlength" => 50,
					),
					array(
						"key" => "field_5c0826ec4d131",
						"label" => "Label",
						"name" => "label",
						"type" => "text",
						"instructions" => "Label for the class that will appear in the formats dropdown",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826ec4d130",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half",
							"id" => "",
						),
						"default_value" => "",
						"placeholder" => "",
						"prepend" => "",
						"append" => "",
						"maxlength" => 30,
					),
					array(
						"key" => "field_5c0826ec4d132",
						"label" => "Selector(s)",
						"name" => "selectors",
						"type" => "checkbox",
						"instructions" => "Choose all selectors that can have this class",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826ec4d130",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "full-width list-6col",
							"id" => "",
						),
						"choices" => array(
							"p" => "p",
							"h2" => "h2",
							"h3" => "h3",
							"h4" => "h4",
							"h5" => "h5",
							"h6" => "h6",
							"address" => "address",
							"pre" => "pre",
							"ul" => "ul",
							"ol" => "ol",
							"li" => "li",
							"dl" => "dl",
							"dt" => "dt",
							"dd" => "dd",
							"blockquote" => "blockquote",
							"details" => "details",
							"summary" => "summary",
							"hr" => "hr",
							"a" => "a",
							"q" => "q",
							"dfn" => "dfn",
							"cite" => "cite",
							"strong" => "strong",
							"em" => "em",
							"abbr" => "abbr",
							"time" => "time",
							"del" => "del",
							"ins" => "ins",
							"mark" => "mark",
							"code" => "code",
							"samp" => "samp",
							"kbd" => "kbd",
							"var" => "var",
							"meter" => "meter",
							"progress" => "progress",
						),
						"allow_custom" => 0,
						"save_custom" => 0,
						"default_value" => array(
						),
						"layout" => "",
						"toggle" => 0,
						"return_format" => "",
					),
					array(
						"key" => "field_5c0826ec4d133",
						"label" => "Inline Wrapper",
						"name" => "inline",
						"type" => "radio",
						"instructions" => "Optionally select an inline element to apply to the existing selection",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826ec4d130",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half list-4col",
							"id" => "",
						),
						"choices" => array(
							"none" => "None",
							"a" => "a",
							"q" => "q",
							"dfn" => "dfn",
							"cite" => "cite",
							"strong" => "strong",
							"em" => "em",
							"abbr" => "abbr",
							"time" => "time",
							"del" => "del",
							"ins" => "ins",
							"mark" => "mark",
							"code" => "code",
							"samp" => "samp",
							"kbd" => "kbd",
							"var" => "var",
						),
						"allow_null" => 0,
						"other_choice" => 0,
						"save_other_choice" => 0,
						"default_value" => "none",
						"layout" => "",
						"return_format" => "",
					),
					array(
						"key" => "field_5c0826ec4d134",
						"label" => "Block Wrapper",
						"name" => "block",
						"type" => "radio",
						"instructions" => "Optionally select a block element to apply to the existing selection",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826ec4d130",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half list-3col",
							"id" => "",
						),
						"choices" => array(
							"none" => "None",
							"p" => "p",
							"h2" => "h2",
							"h3" => "h3",
							"h4" => "h4",
							"h5" => "h5",
							"h6" => "h6",
							"address" => "address",
							"pre" => "pre",
							"blockquote" => "blockquote",
						),
						"allow_null" => 0,
						"other_choice" => 0,
						"save_other_choice" => 0,
						"default_value" => "none",
						"layout" => "",
						"return_format" => "",
					),
					array(
						"key" => "field_5c0826ec4d135",
						"label" => "Exact?",
						"name" => "exact",
						"type" => "true_false",
						"instructions" => "Disable merging of similar styles? This is needed for some CSS inheritance issues such as text-decoration for underline/strikethrough.",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826ec4d130",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "two-thirds",
							"id" => "",
						),
						"message" => "",
						"default_value" => 0,
						"ui" => 1,
						"ui_on_text" => "",
						"ui_off_text" => "",
					),
					array(
						"key" => "field_5c0826ec4d136",
						"label" => "Wrapper?",
						"name" => "wrapper",
						"type" => "true_false",
						"instructions" => "Should this class be a container for block elements?",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c0826ec4d130",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-third",
							"id" => "",
						),
						"message" => "",
						"default_value" => 0,
						"ui" => 1,
						"ui_on_text" => "",
						"ui_off_text" => "",
					),
				),
			),
			array(
				"key" => "field_5c08272a4d13b",
				"label" => "Custom Class Four",
				"name" => "rpc_tinymce_editor_acf_class_5",
				"type" => "group",
				"instructions" => "Add a custom class to the editor‘s format dropdown.",
				"required" => 0,
				"conditional_logic" => array(
					array(
						array(
							"field" => "field_5bec7ba16df01",
							"operator" => "==",
							"value" => "1",
						),
						array(
							"field" => "field_5bec7c1a6df02",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5bec7b6c6df00",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5c0826bc4d118",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5c0826bc4d119",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5c0826d44d124",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5c0826d44d125",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5c0826ec4d130",
							"operator" => "!=empty",
						),
						array(
							"field" => "field_5c0826ec4d131",
							"operator" => "!=empty",
						),
					),
				),
				"wrapper" => array(
					"width" => "",
					"class" => "class-group",
					"id" => "",
				),
				"layout" => "block",
				"sub_fields" => array(
					array(
						"key" => "field_5c08272a4d13c",
						"label" => "Class(es)",
						"name" => "classes",
						"type" => "text",
						"instructions" => "Add the css class name. Multiple names are okay — separate with a space.",
						"required" => 0,
						"conditional_logic" => 0,
						"wrapper" => array(
							"width" => "",
							"class" => "one-half",
							"id" => "",
						),
						"default_value" => "",
						"placeholder" => "",
						"prepend" => "",
						"append" => "",
						"maxlength" => 50,
					),
					array(
						"key" => "field_5c08272a4d13d",
						"label" => "Label",
						"name" => "label",
						"type" => "text",
						"instructions" => "Label for the class that will appear in the formats dropdown",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c08272a4d13c",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half",
							"id" => "",
						),
						"default_value" => "",
						"placeholder" => "",
						"prepend" => "",
						"append" => "",
						"maxlength" => 30,
					),
					array(
						"key" => "field_5c08272a4d13e",
						"label" => "Selector(s)",
						"name" => "selectors",
						"type" => "checkbox",
						"instructions" => "Choose all selectors that can have this class",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c08272a4d13c",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "full-width list-6col",
							"id" => "",
						),
						"choices" => array(
							"p" => "p",
							"h2" => "h2",
							"h3" => "h3",
							"h4" => "h4",
							"h5" => "h5",
							"h6" => "h6",
							"address" => "address",
							"pre" => "pre",
							"ul" => "ul",
							"ol" => "ol",
							"li" => "li",
							"dl" => "dl",
							"dt" => "dt",
							"dd" => "dd",
							"blockquote" => "blockquote",
							"details" => "details",
							"summary" => "summary",
							"hr" => "hr",
							"a" => "a",
							"q" => "q",
							"dfn" => "dfn",
							"cite" => "cite",
							"strong" => "strong",
							"em" => "em",
							"abbr" => "abbr",
							"time" => "time",
							"del" => "del",
							"ins" => "ins",
							"mark" => "mark",
							"code" => "code",
							"samp" => "samp",
							"kbd" => "kbd",
							"var" => "var",
							"meter" => "meter",
							"progress" => "progress",
						),
						"allow_custom" => 0,
						"save_custom" => 0,
						"default_value" => array(
						),
						"layout" => "vertical",
						"toggle" => 0,
						"return_format" => "value",
					),
					array(
						"key" => "field_5c08272a4d13f",
						"label" => "Inline Wrapper",
						"name" => "inline",
						"type" => "radio",
						"instructions" => "Optionally select an inline element to apply to the existing selection",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c08272a4d13c",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half list-4col",
							"id" => "",
						),
						"choices" => array(
							"none" => "None",
							"a" => "a",
							"q" => "q",
							"dfn" => "dfn",
							"cite" => "cite",
							"strong" => "strong",
							"em" => "em",
							"abbr" => "abbr",
							"time" => "time",
							"del" => "del",
							"ins" => "ins",
							"mark" => "mark",
							"code" => "code",
							"samp" => "samp",
							"kbd" => "kbd",
							"var" => "var",
						),
						"allow_null" => 0,
						"other_choice" => 0,
						"save_other_choice" => 0,
						"default_value" => "none",
						"layout" => "vertical",
						"return_format" => "value",
					),
					array(
						"key" => "field_5c08272a4d140",
						"label" => "Block Wrapper",
						"name" => "block",
						"type" => "radio",
						"instructions" => "Optionally select a block element to apply to the existing selection",
						"required" => 1,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c08272a4d13c",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-half list-3col",
							"id" => "",
						),
						"choices" => array(
							"none" => "None",
							"p" => "p",
							"h2" => "h2",
							"h3" => "h3",
							"h4" => "h4",
							"h5" => "h5",
							"h6" => "h6",
							"address" => "address",
							"pre" => "pre",
							"blockquote" => "blockquote",
						),
						"allow_null" => 0,
						"other_choice" => 0,
						"save_other_choice" => 0,
						"default_value" => "none",
						"layout" => "vertical",
						"return_format" => "value",
					),
					array(
						"key" => "field_5c08272a4d141",
						"label" => "Exact?",
						"name" => "exact",
						"type" => "true_false",
						"instructions" => "Disable merging of similar styles? This is needed for some CSS inheritance issues such as text-decoration for underline/strikethrough.",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c08272a4d13c",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "two-thirds",
							"id" => "",
						),
						"message" => "",
						"default_value" => 0,
						"ui" => 1,
						"ui_on_text" => "",
						"ui_off_text" => "",
					),
					array(
						"key" => "field_5c08272a4d142",
						"label" => "Wrapper?",
						"name" => "wrapper",
						"type" => "true_false",
						"instructions" => "Should this class be a container for block elements?",
						"required" => 0,
						"conditional_logic" => array(
							array(
								array(
									"field" => "field_5c08272a4d13c",
									"operator" => "!=empty",
									"value" => "",
								),
							),
						),
						"wrapper" => array(
							"width" => "",
							"class" => "one-third",
							"id" => "",
						),
						"message" => "",
						"default_value" => 0,
						"ui" => 1,
						"ui_on_text" => "",
						"ui_off_text" => "",
					),
				),
			),
		),
		"menu_order" => 0,
		"position" => "normal",
		"style" => "default",
		"label_placement" => "top",
		"instruction_placement" => "label",
		"hide_on_screen" => "",
		"active" => 1,
		"description" => "",
	));

	
}