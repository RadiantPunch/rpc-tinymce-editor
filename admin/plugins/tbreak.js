(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_tbreak', function( editor, url ) {

        // ----- BUTTON REGISTRATION -----
        editor.addButton('tbreak', {
            title: 'Thematic Break',
            image: url + '/icons/tbreak.svg',
            onclick: function(){
                editor.insertContent('<hr />');
            }
        });

    });
})(jQuery);