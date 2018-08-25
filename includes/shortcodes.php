<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function rpc_tinymce_enable_shortcodes() {
	$shortcodes = rpc_tinymce_requires_shortcode();
	$enabled_shortcodes = array();

	foreach ( $shortcodes as $sc ) {
		if ( rpc_tinymce_check_settings( $sc ) ) {
			require_once plugin_dir_path( __FILE__ ) . $sc . '.php';
			array_push( $enabled_shortcodes, $sc );
		}
	}

	if ( !empty( $enabled_shortcodes ) ) {
		add_filter( 'the_content', 'rpc_tinymce_clean_content' );
	}
}

rpc_tinymce_enable_shortcodes();

function rpc_tinymce_clean_content( $content ) {
	$array = array(
		'<p class="scode no-edit no-return first">' => '',
		'<span class="edit">' => '',
		'</span>" work' => '" work',
		'</span>" url' => '" url',
		'</span>" title' => '" title',
		'</span>" company' => '" company',
		'<p class="scode no-edit last">[/blockquote]</p>' => '[/blockquote]',
		'</span>"]</p>' => '"]',
		'<p class="scode no-edit first">[details]</p>' => '[details]',
		'<p class="br-only dsummary"><span class="scode no-edit">[dsummary]</span>' => '[dsummary]',
		'<span class="scode no-edit">[/dsummary]</span></p>' => '[/dsummary]',
		'<p class="scode no-edit last">[/details]</p>' => '[/details]',
		'<p class="scode no-edit first">[dlist]</p>' => '[dlist]',
		'<p class="br-only dterm"><span class="scode no-edit">[dterm]</span>' => '[dterm]',
		'<span class="scode no-edit">[/dterm]</span></p>' => '[/dterm]',
		'<p class="br-only ddescription"><span class="scode no-edit">[ddescription]</span>' => '[ddescription]',
		'<span class="scode no-edit">[/ddescription]</span></p>' => '[/ddescription]',
		'<p class="scode no-edit last">[/dlist]</p>' => '[/dlist]',
		'<span class="no-edit"><span class="scode no-return">' => '',
		'</span>" max' => '" max',
		'</span>" value' => '" value',
		'</span>" low' => '" low',
		'</span>" high' => '" high',
		'</span>" optimum' => '" optimum',
		'</span>"]</span>' => '"]',
		'</span><span class="scode">[/meter]</span></span>' => '[/meter]',
		'border=""' => '',

    );
    return strtr( $content, $array );
}