<?php 

if ( ! defined( "ABSPATH" ) ) {
	exit;
}

function rpc_tinymce_settings_page() {

    if ( ! current_user_can( "manage_options" ) ) return;

    if ( function_exists( "rpc_tinymce_acf_form" ) ) {
        rpc_tinymce_acf_form();
    } ?>
    
    <div class="wrap">
        <h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
        <form action="options.php" method="post">
            
            <?php settings_fields( "rpc_tinymce_options" );
            do_settings_sections( "rpc-editor" );
            submit_button( "Save Format Preferences" ); ?>
            
        </form>

        <?php if ( function_exists( "rpc_tinymce_acf_form" ) ) {
            $options = array(
                "id" => "acf-form",
                "post_id" => "options",
                "new_post" => false,
                "field_groups" => array( "group_5bec7aa807e6e" ),
                "return" => admin_url( "admin.php?page=rpc-editor" ),
                "submit_value" => "Save Custom Classes",
            );
        
            acf_form( $options ); 
        } ?>

    </div><?php
}