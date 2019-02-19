(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_strong', function( editor, url ) {

        // ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
            editor.formatter.register('strong_format', {inline: 'strong'});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('strong', {
            title: 'Strong',
            image: url + '/strong.svg',
            onclick: function() {
                editor.execCommand('mceToggleFormat', false, 'strong_format');
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'strong_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });

    });
})(jQuery);