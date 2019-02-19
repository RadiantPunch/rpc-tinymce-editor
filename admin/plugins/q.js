(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_q', function( editor, url ) {


        // ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
            editor.formatter.register('q_format', {inline: 'q'});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('q', {
            title: 'Inline Quotation',
            image: url + '/icons/q.svg',
            onclick: function() {
                editor.execCommand('mceToggleFormat', false, 'q_format');
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'q_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });

    });
})(jQuery);