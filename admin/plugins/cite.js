(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_cite', function( editor, url ) {


    	// ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
            editor.formatter.register('cite_format', {inline: 'cite'});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('cite', {
            title: 'Citation',
            image: url + '/icons/cite.svg',
            onclick: function() {
            	editor.execCommand('mceToggleFormat', false, 'cite_format');
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'cite_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });

    });
})(jQuery);