(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_ins', function( editor, url ) {


    	// ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
            editor.formatter.register('ins_format', {inline: 'ins'});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('ins', {
            title: 'Insertion',
            image: url + '/ins.svg',
            onclick: function() {
            	editor.execCommand('mceToggleFormat', false, 'ins_format');
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'ins_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });

    });
})(jQuery);