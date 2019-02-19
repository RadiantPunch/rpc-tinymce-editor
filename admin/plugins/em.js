(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_em', function( editor, url ) {
        

        // ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
            editor.formatter.register('em_format', {inline: 'em'});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('em', {
            title: 'Emphasis',
            image: url + '/icons/em.svg',
            onclick: function() {
                editor.execCommand('mceToggleFormat', false, 'em_format');
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'em_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });


    });
})(jQuery);