(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_del', function( editor, url ) {


    	// ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
            editor.formatter.register('del_format', {inline: 'del'});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('del', {
            title: 'Deletion',
            image: url + '/del.svg',
            onclick: function() {
            	editor.execCommand('mceToggleFormat', false, 'del_format');
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'del_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });

    });
})(jQuery);