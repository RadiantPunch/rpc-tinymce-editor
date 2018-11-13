<?php 

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_settings_page() {
	
	if ( ! current_user_can( "manage_options" ) ) return; ?>
	
	<div class="wrap">
		<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
		<form action="options.php" method="post">
			
			<?php settings_fields( "rpc_tinymce_options" );
			do_settings_sections( "rpc-editor" );
			submit_button(); ?>
			
		</form>
	</div>
	
	<?php	
}