(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_dl', function( editor, url ) {

        // ----- BUTTON REGISTRATION -----
        editor.addButton('dl', {
            title: 'Description List',
            type: 'splitbutton',
            image: url + '/dl.svg',
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
        var dlistStart = '<p class="scode no-edit first">[dlist]</p>';
        var dlistEnd = '<p class="scode no-edit last">[/dlist]</p>';

        var dtermStart = '<p class="br-only dterm"><span class="scode no-edit">[dterm]</span>';
        var dtermEnd = '<span class="scode no-edit">[/dterm]</span></p>';

        var ddescriptionStart = '<p class="br-only ddescription"><span class="scode no-edit">[ddescription]</span>';
        var ddescriptionEnd = '<span class="scode no-edit">[/ddescription]</span></p>';

        var dterm = dtermStart + 'Term' + dtermEnd;
        var ddescription = ddescriptionStart + 'Description' + ddescriptionEnd;

        editor.addCommand('dlCmd', function(){
            var currentNode = $(editor.selection.getNode());
            if (currentNode.is('.dterm') || currentNode.is('.ddescription') || ( currentNode.is('p.scode') && currentNode.attr('data-mce-selected') ) ) {
                return;
            }
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