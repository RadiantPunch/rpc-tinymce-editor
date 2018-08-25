(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_mark', function( editor, url ) {


    	// ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
            editor.formatter.register('mark_format', {inline: 'mark'});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('mark', {
            title: 'Mark',
            image: url + '/mark.svg',
            onclick: function() {
            	editor.execCommand('mceToggleFormat', false, 'mark_format');
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'mark_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });

    });
})(jQuery);