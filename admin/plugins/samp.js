(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_samp', function( editor, url ) {


        // ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
            editor.formatter.register('samp_format', {inline: 'samp'});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('samp', {
            title: 'Sample Output',
            image: url + '/icons/samp.svg',
            onclick: function() {
                editor.execCommand('mceToggleFormat', false, 'samp_format');
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'samp_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });

    });
})(jQuery);