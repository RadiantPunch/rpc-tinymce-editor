(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_var', function( editor, url ) {


      // ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
            editor.formatter.register('var_format', {inline: 'var'});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('var', {
            title: 'Variable',
            image: url + '/icons/var.svg',
            onclick: function() {
               editor.execCommand('mceToggleFormat', false, 'var_format');
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'var_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });

    });
})(jQuery);