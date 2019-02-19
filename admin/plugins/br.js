(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_br', function( editor, url ) {

        // ----- BUTTON REGISTRATION -----
        editor.addButton('br', {
            title: 'Line Break',
            image: url + '/icons/br.svg',
            onclick: function(){
                editor.selection.setContent('<br />');
            }
        });

    });
})(jQuery);