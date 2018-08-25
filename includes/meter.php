<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// ----- REGISTER SHORTCODES -----
add_shortcode('meter', 'rpc_tinymce_meter_shortcode');

// ----- RENDER SHORTCODES -----
function rpc_tinymce_meter_shortcode($atts, $content, $tag){

	extract(shortcode_atts(array(
        'min' => '',
        'max' => '',
        'value' => '',
        'low' => '',
        'high' => '',
        'optimum' => '',
    ), $atts));

	$min_set = '';
	$max_set = '';
	$val_set = '';
	$low_set = '';
	$high_set = '';
	$opt_set = '';

	if(!empty($value)) {
		$val_set = ' value="' . $value . '"';

		if(!empty($min)) {
			$min_set = ' min="' . $min . '"';
		}

		if(!empty($max)) {
			$max_set = ' max="' . $max . '"';
		}

		if(!empty($low)) {
			$low_set = ' low="' . $low . '"';
		}

		if(!empty($high)) {
			$high_set = ' high="' . $high . '"';
		}

		if(!empty($optimum)) {
			$opt_set = ' optimum="' . $optimum . '"';
		}
		
		$output = '<meter' . $min_set . $max_set . $val_set . $low_set . $high_set . $opt_set . '>' . $content . '</meter>';
		return $output;

	} else {
		return '<p class="shortcode-error"><strong>Error:</strong> Meter elements require at least a value attribute.</p>';
	}
}

?>