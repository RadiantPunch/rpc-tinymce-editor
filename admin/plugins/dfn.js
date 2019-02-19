(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_dfn', function( editor, url ) {


    	// ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
            editor.formatter.register('dfn_format', {inline: 'dfn'});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('dfn', {
            title: 'Definition',
            image: url + '/icons/dfn.svg',
            onclick: function() {
            	editor.execCommand('mceToggleFormat', false, 'dfn_format');
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'dfn_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });

    });
})(jQuery);