(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_dl', function( editor, url ) {

        // ----- BUTTON REGISTRATION -----
        editor.addButton('dl', {
            title: 'Description List',
            type: 'splitbutton',
            image: url + '/icons/dl.svg',
            cmd: 'dlCmd',
            menu: [
                {
                    text: 'Add New Pair',
                    onclick: function() {
                        editor.execCommand('dtddCmd');
                    },
                },
                {
                    text: 'Add New Term',
                    onclick: function() {
                        editor.execCommand('dtCmd');
                    }
                },
                {
                    text: 'Add New Description',
                    onclick: function() {
                        editor.execCommand('ddCmd');
                    }
                }
            ]
        });
  
        // ----- BUTTON COMMANDS -----
        var dlistStart = '[dlist]';
        var dlistEnd = '[/dlist]';

        var dtermStart = '[dterm]';
        var dtermEnd = '[/dterm]';

        var ddescriptionStart = '[ddescription]';
        var ddescriptionEnd = '[/ddescription]';

        var dterm = dtermStart + 'Term' + dtermEnd;
        var ddescription = ddescriptionStart + 'Description' + ddescriptionEnd;

        editor.addCommand('dlCmd', function(){
            var returnText = dlistStart + dterm + ddescription + dlistEnd;
            editor.insertContent(returnText);
        });

        editor.addCommand('dtddCmd', function(){
            var returnText = dterm + ddescription;
            editor.insertContent(returnText);
        });

        editor.addCommand('dtCmd', function(){
            var returnText = dterm;
            editor.insertContent(returnText);
        });

        editor.addCommand('ddCmd', function(){
            var returnText = ddescription;
            editor.insertContent(returnText);
        });


    });
})(jQuery);