(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_kbd', function( editor, url ) {


    	// ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
            editor.formatter.register('kbd_format', {inline: 'kbd'});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('kbd', {
            title: 'Keyboard Input',
            image: url + '/icons/kbd.svg',
            onclick: function() {
            	editor.execCommand('mceToggleFormat', false, 'kbd_format');
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'kbd_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });

    });
})(jQuery);