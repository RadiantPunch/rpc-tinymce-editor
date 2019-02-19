(function($) {
    tinymce.PluginManager.add( 'rpc_tinymce_abbr', function( editor, url ) {

    	// ----- REGISTER FORMATS FOR BUTTONS -----
        editor.on('init', function(e) {
            editor.formatter.register('abbr_format', {inline: 'abbr'});
            editor.formatter.register('abbr_format_remove', {inline: 'abbr', attributes: {title : 'remove-me'}});
        });

        // ----- BUTTON REGISTRATION -----
        editor.addButton('abbr', {
            title: 'Abbreviation',
            image: url + '/icons/abbr.svg',
            onclick: function() {
            	var node = $(editor.selection.getNode());
            	if (node.is('abbr')) {
			        editor.formatter.apply('abbr_format_remove');
			        editor.formatter.remove('abbr_format_remove');
			    } else {
			        editor.execCommand('abbrCmd');
			    }
            },
            onpostrender: function() {
                var btn = this;
                editor.on( 'init', function() {
                    editor.formatter.formatChanged( 'abbr_format', function(state) {
                        btn.active(state);
                    });
                });
            }
        });

        // ----- BUTTON COMMANDS -----
	    editor.addCommand('abbrCmd', function(){
	    	var selectedText = editor.selection.getContent({format: 'html'});
	    	var win = editor.windowManager.open({
	    		title: 'Abbreviation',
	    		body: [
	    			{
	    				type: 'textbox',
	    				name: 'abbrTitle',
	    				label: 'Abbreviation Meaning (Optional)',
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
		        onsubmit: function(e) {
		            var abbrTitle = e.data.abbrTitle;
		            if ( abbrTitle.length > 0 ) {
						abbrTitle = ' title="' + abbrTitle + '"';
						var returnText = '<abbr' + abbrTitle + '>' + selectedText + '</abbr>';
		        		editor.execCommand('mceReplaceContent', false, returnText);
	            		return;
		            } else {
		            	editor.formatter.apply('abbr_format');
		            }
		        }
	    	});
	    });

    });
})(jQuery);