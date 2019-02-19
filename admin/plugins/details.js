(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_details', function( editor, url ) {


        // ----- BUTTON REGISTRATION -----
        editor.addButton('details', {
            title: 'Details',
            image: url + '/icons/details.svg',
            cmd: 'detailsCmd',
        });
  
        // ----- BUTTON COMMANDS -----
        editor.addCommand('detailsCmd', function(){
            var selectedText = editor.selection.getContent({format: 'text'});
            var win = editor.windowManager.open({
                title: 'Details',
                width: 600,
                height: 250,
                body: [
                    {
                        type: 'textbox',
                        name: 'detailsSummary',
                        label: 'Summary',
                        value: selectedText,
                        multiline: true,
                        minHeight: 50,
                    },
                    {
                        type: 'textbox',
                        name: 'detailsContent',
                        label: 'Details',
                        multiline: true,
                        minHeight: 150
                    }
                ],
                buttons: [
                    {
                      text: 'Ok',
                      subtype: 'primary',
                      onclick: function() {
                        win.submit();
                      }
                    },
                    {
                      text: 'Cancel',
                      onclick: 'close'
                    }
                ],
                onsubmit: function(e){
                    var summary = e.data.detailsSummary;
                    var content = '<p>' + e.data.detailsContent + '</p>';
                    if ( (summary.length > 0) && (content.length > 0) ) {

                        var returnText = '[details]' + '[dsummary]' + summary + '[/dsummary]' + content + '[/details]';
                        editor.insertContent(returnText);
                        return;
                    } else {
                        editor.windowManager.alert('All fields are required.');
                        e.preventDefault();
                        return;
                    }
                }
            });
        });


    });
})(jQuery);